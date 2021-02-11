import { NextApiRequest, NextApiResponse } from 'next';
import { SnipcartRequestParams } from '../../../interfaces/snipcart.d';
import { getBatch } from '../../../utils/chitchats';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.query.id) {
    res.status(200).json({});
    return;
  }
  const batch = await getBatch(req.query.id);
  res.status(200).json(batch.data);
}
