import nodemailer from 'nodemailer';
import mjml2html from 'mjml';
import { blogPosts, featuredPost } from '../src/data/blog-data.js';

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: "smtp.example.com", // Replace with your SMTP server
  port: 587,
  secure: false,
  auth: {
    user: "your-email@example.com", // Replace with your email
    pass: "your-password" // Replace with your password
  }
});

// Generate newsletter content
const generateNewsletter = () => {
  const latestPosts = [...blogPosts].slice(0, 3);
  
  const mjmlTemplate = `
    <mjml>
      <mj-head>
        <mj-title>BlogSpace Weekly Newsletter</mj-title>
        <mj-font name="Inter" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
        <mj-attributes>
          <mj-all font-family="Inter, sans-serif" />
        </mj-attributes>
      </mj-head>
      <mj-body background-color="#f3f4f6">
        <mj-section>
          <mj-column>
            <mj-text align="center" font-size="24px" font-weight="bold" color="#1f2937">BlogSpace</mj-text>
            <mj-text align="center" color="#6b7280">Your Weekly Tech Digest</mj-text>
          </mj-column>
        </mj-section>

        <mj-section background-color="#ffffff" border-radius="8px">
          <mj-column>
            <mj-image src="${featuredPost.imageUrl}" alt="${featuredPost.title}" border-radius="8px" />
            <mj-text font-size="24px" font-weight="bold" color="#1f2937">${featuredPost.title}</mj-text>
            <mj-text color="#4b5563">${featuredPost.excerpt}</mj-text>
            <mj-button background-color="#4f46e5" border-radius="9999px" href="#">Read More</mj-button>
          </mj-column>
        </mj-section>

        <mj-section background-color="#ffffff" border-radius="8px">
          <mj-column>
            <mj-text font-size="20px" font-weight="bold" color="#1f2937">Latest Articles</mj-text>
            ${latestPosts.map(post => `
              <mj-text font-size="16px" font-weight="bold" color="#1f2937">${post.title}</mj-text>
              <mj-text color="#4b5563">${post.excerpt}</mj-text>
              <mj-button background-color="#4f46e5" border-radius="9999px" href="#">Read Article</mj-button>
            `).join('')}
          </mj-column>
        </mj-section>

        <mj-section>
          <mj-column>
            <mj-text align="center" color="#6b7280">© 2024 BlogSpace. All rights reserved.</mj-text>
            <mj-text align="center">
              <a href="#" style="color: #4f46e5; text-decoration: none;">Unsubscribe</a> · 
              <a href="#" style="color: #4f46e5; text-decoration: none;">Privacy Policy</a>
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  `;

  const { html } = mjml2html(mjmlTemplate);
  return html;
};

// Send newsletter
const sendNewsletter = async () => {
  try {
    const html = generateNewsletter();
    
    const info = await transporter.sendMail({
      from: '"BlogSpace" <newsletter@blogspace.com>',
      to: "subscribers@example.com", // Replace with your subscriber list
      subject: "Your Weekly Tech Digest from BlogSpace",
      html: html
    });

    console.log("Newsletter sent successfully:", info.messageId);
  } catch (error) {
    console.error("Error sending newsletter:", error);
  }
};

sendNewsletter();