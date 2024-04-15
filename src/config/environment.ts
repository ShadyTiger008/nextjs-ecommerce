interface configType {
  port: string | any;
  cors_origin: string | any;
  db_host: string | any;
  db_port: string | any;
  db_user: string | any;
  db_pass: string | any;
  db_name: string | any;
  ref_sec: string | any;
  ref_exp: string | any;
  access_sec: string | any;
  access_exp: string | any;
  cloud_name: string | any;
  cloud_key: string | any;
  cloud_api: string | any;
  email_host: string | any;
  email_port: string | any;
  email_user: string | any;
  email_pass: string | any;
}

const _config: configType = {
  port: process.env.PORT,
  cors_origin: process.env.CORS_ORIGIN,
  db_host: process.env.DB_HOST,
  db_port: process.env.DB_PORT,
  db_user: process.env.DB_USER,
  db_pass: process.env.DB_PASSWORD,
  db_name: process.env.DB_NAME,
  ref_sec: process.env.REFRESH_TOKEN_SECRET,
  ref_exp: process.env.REFRESH_TOKEN_EXPIRY,
  access_sec: process.env.ACCESS_TOKEN_SECRET,
  access_exp: process.env.ACCESS_TOKEN_EXPIRY,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  cloud_key: process.env.CLOUDINARY_API_KEY,
  cloud_api: process.env.CLOUDINARY_API_SECRET,
  email_host: process.env.EMAIL_HOST,
  email_port: process.env.EMAIL_PORT,
  email_user: process.env.EMAIL_USER,
  email_pass: process.env.EMAIL_PASSWORD,
};

export const config = {
  get(key: keyof configType) {
    // Adjusted the type of 'key' here
    const value = _config[key];

    if (!value) {
      console.error(
        `The ${key} variable not found. Make sure to pass environment variables`,
      );
      process.exit();
    }

    return value;
  },
};
