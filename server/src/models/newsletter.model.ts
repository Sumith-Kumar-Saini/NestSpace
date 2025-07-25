import { model } from 'mongoose';
import newsletterSchema, { INewsletter } from '../schemas/newsletter.schema';

const Newsletter = model<INewsletter>('Newsletter', newsletterSchema);
export default Newsletter;