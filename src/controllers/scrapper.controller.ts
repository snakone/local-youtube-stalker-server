import { Request, Response } from 'express';
import { getPageText } from '../classes/scrapper';

const SCRAPPER_CTRL: any = {};

SCRAPPER_CTRL.scrappePage = async (req: Request, res: Response) => {

  const { url } = req.query;

  if (url) {
    try {
      const text = await getPageText(String(url));

      if (text === '') {
        return res.status(400).json({
          ok: false,
          message: 'Scrapper Text Not Found',
        });
      }

      res.status(200).json({
        ok: true,
        message: 'Scrappe Page',
        text,
      });
    } catch (err) {
      return res.status(400).json({
        ok: false,
        message: 'Error Scrappe Page',
        error: err,
      });
    }
  }
};

export default SCRAPPER_CTRL;