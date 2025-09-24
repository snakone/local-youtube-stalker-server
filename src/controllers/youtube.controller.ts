import { Request, Response } from 'express';
import { fetchVideoDetails } from '../classes/functions';

const YOUTUBE_CTRL: any = {};

YOUTUBE_CTRL.getVideoDetails = async (req: Request, res: Response) => {

  const { id, lang } = req.query;

  if (id) {
    const details = await fetchVideoDetails(String(id), String(lang));

    res.status(200).json({
      ok: true,
      message: 'Get Video Details',
      details,
    })
  }
};

export default YOUTUBE_CTRL;