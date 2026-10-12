/**
 * @jest-environment node
 */
import { POST } from '../src/app/api/contact/route';

describe('Contact API Route', () => {
  it('returns 400 when name or email is missing', async () => {
    const req = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify({ name: '' }),
    });

    const res = await POST(req);
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toBe('Name and email are required fields.');
  });

  it('successfully processes enquiry for hello@mablab.in', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    const req = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Growth Lead',
        email: 'growth@example.com',
        number: '+1 555-0199',
        companyName: 'Acme Scale Inc',
        calendlyLink: 'https://calendly.com/acme',
      }),
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('[Mablab Contact Form] New Inquiry received for hello@mablab.in:'),
      expect.objectContaining({
        recipient: 'hello@mablab.in',
        name: 'Growth Lead',
        email: 'growth@example.com',
        phone: '+1 555-0199',
        company: 'Acme Scale Inc',
      })
    );

    consoleSpy.mockRestore();
  });
});
