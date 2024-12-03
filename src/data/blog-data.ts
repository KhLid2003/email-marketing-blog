export const blogPosts = [
  {
    title: "Email Marketing Trends That Will Dominate 2024",
    excerpt:
      "Discover the latest email marketing trends shaping the industry. From AI-powered personalization to interactive emails and AMP technology, learn how to stay ahead of the curve in your email campaigns.",
    author: "Sarah Johnson",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80",
    category: "Trends",
    content: `The landscape of email marketing is evolving rapidly, with new technologies and strategies emerging to help marketers create more engaging and effective campaigns.

    AI-Powered Personalization
    Artificial Intelligence is revolutionizing email marketing:
    - Dynamic content generation based on user behavior
    - Predictive analytics for optimal send times
    - Smart segmentation and targeting
    - Automated A/B testing and optimization

    The impact of AI extends beyond just content creation. We're seeing AI-driven tools that can:
    - Predict customer lifetime value
    - Identify at-risk subscribers
    - Generate subject lines with higher open rates
    - Optimize email delivery times for each recipient

    Interactive Email Experiences
    Modern email clients now support advanced interactivity:
    - In-email shopping carts
    - Interactive polls and surveys
    - Animated CTAs and microinteractions
    - Real-time content updates

    AMP for Email
    Google's AMP for Email is changing how subscribers interact with messages:
    - Dynamic content updates
    - Interactive forms
    - Real-time inventory updates
    - Interactive booking systems

    Privacy and Compliance
    With increasing focus on privacy:
    - First-party data strategies
    - Enhanced subscription processes
    - Transparent data handling
    - Regional compliance considerations

    Looking ahead, successful email marketing will require a balance of innovative technology and strategic thinking, always putting the subscriber's experience first.`,
  },
  {
    title: "Mastering Email Deliverability: A Complete Guide",
    excerpt:
      "Learn the essential techniques to improve your email deliverability rates. From authentication protocols to list hygiene, discover how to ensure your emails reach the inbox every time.",
    author: "Mike Chen",
    date: "Mar 14, 2024",
    readTime: "6 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1579389083395-4507e98b5b67?auto=format&fit=crop&q=80",
    category: "Deliverability",
    content: `Email deliverability is the foundation of successful email marketing. Let's explore the key factors that influence inbox placement and how to optimize them.

    Authentication Protocols
    Essential email authentication methods:
    - SPF (Sender Policy Framework)
    - DKIM (DomainKeys Identified Mail)
    - DMARC (Domain-based Message Authentication)
    - BIMI (Brand Indicators for Message Identification)

    Here's a practical example of SPF record:
    v=spf1 include:_spf.google.com include:_spf.example.com ~all

    List Hygiene Practices
    Maintaining a clean email list:
    - Regular bounce handling
    - Engagement-based segmentation
    - Sunset policies
    - Re-engagement campaigns

    Infrastructure Optimization
    Key technical considerations:
    - Dedicated IP vs. Shared IP
    - Proper DNS setup
    - SSL/TLS encryption
    - Reverse DNS configuration

    Content Best Practices
    Avoid spam triggers by:
    - Maintaining text-to-image ratio
    - Using clean HTML code
    - Avoiding spam trigger words
    - Implementing proper list-unsubscribe headers

    The future of email deliverability will focus on:
    - AI-powered spam detection
    - Enhanced authentication methods
    - Real-time delivery optimization
    - Improved engagement metrics

    Remember, deliverability is an ongoing process that requires constant monitoring and optimization.`,
  },
  {
    title: "Creating High-Converting Email Templates",
    excerpt:
      "Master the art of email template design that drives conversions. From mobile optimization to psychological triggers, learn how to create templates that engage and convert your subscribers.",
    author: "Alex Turner",
    date: "Mar 13, 2024",
    readTime: "7 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80",
    category: "Design",
    content: `The success of your email campaigns heavily depends on your template design. Let's explore proven strategies for creating templates that convert.

    Mobile-First Design
    Essential considerations:
    - Responsive layouts
    - Touch-friendly elements
    - Optimized image sizes
    - Single-column designs

    Example media query:
    @media screen and (max-width: 600px) {
      .email-container {
        width: 100% !important;
      }
      .responsive-image {
        height: auto !important;
        max-width: 100% !important;
        width: 100% !important;
      }
    }

    Psychological Triggers
    Key elements that drive action:
    - Social proof
    - Scarcity indicators
    - Urgency elements
    - Value proposition placement

    Visual Hierarchy
    Guiding the reader's attention:
    - Clear headline hierarchy
    - Strategic white space
    - Contrasting CTAs
    - Visual flow patterns

    Testing and Optimization
    Continuous improvement through:
    - A/B testing key elements
    - Heat map analysis
    - Click tracking
    - Conversion path optimization

    Remember, the best templates balance aesthetic appeal with functional design to drive meaningful engagement and conversions.`,
  },
  {
    title: "Advanced Email Automation Workflows",
    excerpt:
      "Take your email automation to the next level with sophisticated workflow strategies. Learn how to create personalized customer journeys that nurture leads and drive conversions automatically.",
    author: "Emily Rodriguez",
    date: "Mar 12, 2024",
    readTime: "8 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    category: "Automation",
    content: `Email automation is the key to scaling your marketing efforts while maintaining personalization. Let's explore advanced workflow strategies.

    Behavioral Triggers
    Create workflows based on:
    - Website interactions
    - Email engagement patterns
    - Purchase history
    - Cart abandonment

    Example workflow structure:
    1. Trigger: Cart abandonment
    2. Wait: 1 hour
    3. Send: Reminder email
    4. If: No purchase after 24h
    5. Send: Discount offer

    Segmentation Strategies
    Advanced segmentation using:
    - Engagement scores
    - Purchase frequency
    - Content preferences
    - Lifecycle stage

    Personalization at Scale
    Implement dynamic content:
    - Product recommendations
    - Location-based offers
    - Behavioral data
    - Preference center data

    Analytics and Optimization
    Key metrics to track:
    - Workflow conversion rates
    - Time to conversion
    - Revenue per workflow
    - Engagement patterns

    The future of automation includes:
    - AI-powered decision paths
    - Predictive analytics
    - Cross-channel integration
    - Advanced testing capabilities`,
  },
];

export const featuredPost = {
  title: "The Ultimate Guide to Email Marketing ROI in 2024",
  excerpt:
    "Master the art of measuring and optimizing your email marketing ROI. From advanced analytics to conversion tracking, learn how to maximize the return on your email marketing investments and prove its value to stakeholders.",
  author: "David Miller",
  date: "Mar 16, 2024",
  readTime: "12 min read",
  imageUrl:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
  category: "Analytics",
  content: `Understanding and optimizing email marketing ROI is crucial for modern marketers. Let's dive deep into the metrics, strategies, and tools that matter.

  Key Performance Indicators
  Essential metrics to track:

  1. Revenue Metrics
  - Revenue per email
  - Revenue per subscriber
  - Customer lifetime value
  - Campaign ROI

  2. Engagement Metrics
  - Open rates and click rates
  - Conversion rates
  - List growth rate
  - Subscriber engagement score

  3. Technical Metrics
  - Deliverability rates
  - Bounce rates
  - Spam complaints
  - Device usage

  Advanced Analytics
  Modern analytics approaches:

  1. Attribution Modeling
  - First-click attribution
  - Last-click attribution
  - Multi-touch attribution
  - Custom attribution models

  2. Segmentation Analysis
  - Cohort analysis
  - RFM segmentation
  - Behavioral segmentation
  - Predictive analytics

  3. Testing Framework
  - A/B testing strategy
  - Multivariate testing
  - Statistical significance
  - Test prioritization

  Cost Optimization
  Managing campaign costs:

  1. List Management
  - List cleaning costs
  - Acquisition costs
  - Maintenance costs
  - Tool investments

  2. Content Production
  - Template development
  - Copywriting
  - Design resources
  - Testing resources

  3. Technology Stack
  - ESP costs
  - Analytics tools
  - Integration expenses
  - Automation platforms

  Remember, ROI optimization is an ongoing process that requires constant monitoring, testing, and refinement of your email marketing strategy.`,
};

export const categories = [
  { name: "Trends", count: 28 },
  { name: "Deliverability", count: 32 },
  { name: "Design", count: 45 },
  { name: "Automation", count: 38 },
  { name: "Analytics", count: 29 },
  { name: "Personalization", count: 24 },
  { name: "Compliance", count: 18 },
  { name: "Strategy", count: 35 },
  { name: "Testing", count: 22 },
  { name: "Best Practices", count: 41 },
];
