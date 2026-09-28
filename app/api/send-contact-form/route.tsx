import { Resend } from 'resend';
import EmailTemplate from './email-template';
import { ContactFormSubmission } from '@/lib/types/emailTemplates';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body: ContactFormSubmission = await req.json()
        
        const { data, error } = await resend.emails.send({
            from: 'Fortales Automatic <automatic@fortal.es>',
            to: ['samsantbaq@gmail.com'],
            subject: 'Contacto desde el Sitio Web',
            react: <EmailTemplate {...body} />
        });

        console.log(data, error);
        

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}