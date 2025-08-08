const Session = require('../models/Session');

exports.getPublicSessions = async (req, res) => {
  const sessions = await Session.find({ status: 'published' });
  res.json(sessions);
};

exports.getMySessions = async (req, res) => {
  const sessions = await Session.find({ user_id: req.user.id });
  res.json(sessions);
};

exports.getSessionById = async (req, res) => {
  const session = await Session.findOne({ _id: req.params.id, user_id: req.user.id });
  if (!session) return res.status(404).json({ message: 'Not found' });
  res.json(session);
};

exports.saveDraft = async (req, res) => {
  const { title, tags, json_file_url } = req.body;
  const existing = await Session.findOne({ user_id: req.user.id, title });

  if (existing) {
    existing.tags = tags;
    existing.json_file_url = json_file_url;
    existing.status = 'draft';
    existing.updated_at = Date.now();
    await existing.save();
    return res.json({ message: 'Draft updated' });
  }

  await Session.create({
    user_id: req.user.id,
    title,
    tags,
    json_file_url,
    status: 'draft'
  });

  res.status(201).json({ message: 'Draft saved' });
};

exports.publishSession = async (req, res) => {
  const { title, tags, json_file_url } = req.body;
  const existing = await Session.findOne({ user_id: req.user.id, title });

  if (existing) {
    existing.tags = tags;
    existing.json_file_url = json_file_url;
    existing.status = 'published';
    existing.updated_at = Date.now();
    await existing.save();
    return res.json({ message: 'Session published' });
  }

  await Session.create({
    user_id: req.user.id,
    title,
    tags,
    json_file_url,
    status: 'published'
  });

  res.status(201).json({ message: 'Session published' });
};
