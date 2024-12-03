
interface EmailTemplateProps {
  title: string;
  content: string;
  imageUrl: string;
  ctaLink: string;
}

export default function EmailTemplate({ title, content, imageUrl, ctaLink }: EmailTemplateProps) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>${title}</title>
        <style>
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { text-align: center; padding: 20px; }
          .content { background: #ffffff; padding: 20px; border-radius: 8px; }
          .image { width: 100%; height: auto; border-radius: 8px; margin: 20px 0; }
          .cta-button { 
            display: inline-block;
            padding: 12px 24px;
            background: #4f46e5;
            color: white;
            text-decoration: none;
            border-radius: 9999px;
            margin: 20px 0;
          }
          .footer { text-align: center; padding: 20px; color: #6b7280; }
        </style>
      </head>
      <body style="background-color: #f3f4f6; margin: 0; padding: 0; font-family: system-ui, -apple-system, sans-serif;">
        <div class="container">
          <div class="header">
            <h1 style="color: #1f2937; margin: 0;">BlogSpace</h1>
            <p style="color: #6b7280;">Your Weekly Tech Digest</p>
          </div>
          
          <div class="content">
            <img src="${imageUrl}" alt="${title}" class="image"/>
            <h2 style="color: #1f2937; margin-top: 0;">${title}</h2>
            <div style="color: #4b5563; line-height: 1.6;">
              ${content}
            </div>
            <a href="${ctaLink}" class="cta-button">Read More</a>
          </div>

          <div class="footer">
            <p>© 2024 BlogSpace. All rights reserved.</p>
            <p>
              <a href="#" style="color: #4f46e5;">Unsubscribe</a> · 
              <a href="#" style="color: #4f46e5;">Privacy Policy</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
}