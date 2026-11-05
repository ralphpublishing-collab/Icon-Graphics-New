CREATE TABLE IF NOT EXISTS enquiries (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status TEXT NOT NULL DEFAULT 'received',

  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  business TEXT,
  service TEXT NOT NULL,
  additional_services TEXT,
  budget TEXT,
  currency TEXT,
  message TEXT NOT NULL,
  deadline TEXT,
  deliverables TEXT,
  reference_links TEXT,
  contact_method TEXT NOT NULL,
  consent TEXT NOT NULL,

  reference_file_key TEXT,
  reference_file_name TEXT,
  reference_file_type TEXT,
  reference_file_size INTEGER,

  brief_goals TEXT,
  brief_direction TEXT,
  brief_requirements TEXT,

  notification_status TEXT NOT NULL DEFAULT 'pending'
);

CREATE INDEX IF NOT EXISTS idx_enquiries_created_at
ON enquiries(created_at);

CREATE INDEX IF NOT EXISTS idx_enquiries_status
ON enquiries(status);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status TEXT NOT NULL DEFAULT 'active'
);

CREATE INDEX IF NOT EXISTS idx_newsletter_created_at
ON newsletter_subscribers(created_at);
