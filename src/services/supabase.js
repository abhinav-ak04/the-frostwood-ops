import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://zfltsdgxwaiaisulfbdo.supabase.co';
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmbHRzZGd4d2FpYWlzdWxmYmRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4NzU4OTEsImV4cCI6MjA1MDQ1MTg5MX0.ykhzySeay7wsh1RQRKuR-0uzzqd_Fl4VobZLowCZ-MQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
