import { isSupabaseConfigured, supabase } from '@/lib/supabase';
import type { EnquiryInput } from '@/types/enquiry';

export async function submitEnquiry(input: EnquiryInput) {
  if (!isSupabaseConfigured) throw new Error('Supabase is not configured.');

  const { error } = await supabase.from('enquiries').insert({
    full_name: input.full_name,
    email: input.email,
    phone: input.phone,
    company: input.company,
    subject: input.subject,
    message: input.message,
    status: 'new',
  });

  if (error) throw error;
}
