// supabase/functions/facebook-capi/index.ts

import { serve } from 'https://deno.land/x/sift@0.5.0/mod.ts';
import { sendCapiEvent, CapiEventData } from '../../../src/lib/facebookCapi.ts';
import { hash } from '../../../src/utils/hash.ts';

serve(async (req) => {
  try {
    const body = await req.json();
    const { email, phone, service, datetime, bookingId, fbc, fbp } = body;

    const payload: CapiEventData = {
      event_name: 'Schedule',
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_source_url: req.headers.get('referer') ?? undefined,
      user_data: {
        em: [hash(email)],
        ph: [hash(phone)],
        client_ip_address: req.headers.get('x-forwarded-for') ?? undefined,
        client_user_agent: req.headers.get('user-agent') ?? undefined,
        fbc,
        fbp,
      },
      custom_data: { service, appointment_time: datetime },
      event_id: bookingId,
    };

    await sendCapiEvent(payload);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: (err as Error).message }), { status: 500 });
  }
});
