import { Router, type IRouter, type Request, type Response } from 'express';
import {
  parseContactFormPayload,
  sendContactEmail,
} from '../contact-email';

const contactRouter: IRouter = Router();

contactRouter.post('/contact', async (req: Request, res: Response) => {
  const payload = parseContactFormPayload(req.body);
  if (!payload) {
    res.status(400).json({ error: 'Please complete every field with valid information.' });
    return;
  }

  try {
    await sendContactEmail(payload);
    res.status(200).json({ ok: true });
  } catch (error) {
    req.log.error({ err: error }, 'Contact form submission failed');
    res.status(500).json({ error: 'We could not send your message right now.' });
  }
});

export default contactRouter;