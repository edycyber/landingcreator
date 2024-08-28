import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Spinner } from '@/components/ui/spinner';

const LandingPageCreator = () => {
  const [template, setTemplate] = useState('');
  const [modifications, setModifications] = useState({
    title: 'Revolutionize Your Business with InnovateTech',
    subtitle: 'Streamline your operations, boost productivity, and skyrocket your growth with our cutting-edge SaaS solution.',
    features: [
      'Lightning Fast: Experience unparalleled speed and efficiency in your daily operations.',
      'Time-Saving: Automate repetitive tasks and focus on what truly matters for your business.',
      'Scalable Solution: Grow your business with a platform that evolves with your needs.'
    ],
    testimonials: [
      {
        text: 'InnovateTech has completely transformed the way we work. Our productivity has increased tenfold!',
        author: 'Sarah Johnson, CEO of TechCorp'
      },
      {
        text: 'The customer support is outstanding. They\'re always there when we need them, day or night.',
        author: 'Mike Williams, Founder of StartUp Hub'
      },
      {
        text: 'We\'ve seen a significant ROI since implementing InnovateTech. It\'s a game-changer for our industry.',
        author: 'Emily Chen, CFO of GrowthWorks'
      }
    ],
    pricingPlans: [
      { name: 'Starter', price: '$29/month' },
      { name: 'Professional', price: '$79/month' },
      { name: 'Enterprise', price: '$199/month' }
    ]
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchTemplate();
  }, []);

  const fetchTemplate = async () => {
    try {
      setLoading(true);
      // In a real scenario, you'd fetch this from an API
      const templateContent = document.querySelector('[index="1"] [role="main"]').innerHTML;
      setTemplate(templateContent);
    } catch (err) {
      setError('Failed to load template. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const updateModification = (key, value, index = null) => {
    setModifications(prev => {
      if (index !== null) {
        const newArray = [...prev[key]];
        newArray[index] = value;
        return { ...prev, [key]: newArray };
      }
      return { ...prev, [key]: value };
    });
  };

  const generateModifiedHTML = () => {
    let modifiedTemplate = template;
    modifiedTemplate = modifiedTemplate.replace(
      /<h1>[^<]*<\/h1>/,
      `<h1>${modifications.title}</h1>`
    );
    modifiedTemplate = modifiedTemplate.replace(
      /<p>[^<]*<\/p>/,
      `<p>${modifications.subtitle}</p>`
    );
    
    // Update features
    const featuresList = modifications.features.map(feature => `<li>${feature}</li>`).join('');
    modifiedTemplate = modifiedTemplate.replace(
      /<ul class="features-list">[\s\S]*?<\/ul>/,
      `<ul class="features-list">${featuresList}</ul>`
    );

    // Update testimonials
    const testimonialsList = modifications.testimonials.map(testimonial => 
      `<div class="testimonial"><p>${testimonial.text}</p>${testimonial.author}</div>`
    ).join('');
    modifiedTemplate = modifiedTemplate.replace(
      /<div class="testimonials">[\s\S]*?<\/div>/,
      `<div class="testimonials">${testimonialsList}</div>`
    );

    // Update pricing plans
    const pricingList = modifications.pricingPlans.map(plan => 
      `<div class="pricing-plan"><h3>${plan.name}</h3><p class="price">${plan.price}</p></div>`
    ).join('');
    modifiedTemplate = modifiedTemplate.replace(
      /<div class="pricing-plans">[\s\S]*?<\/div>/,
      `<div class="pricing-plans">${pricingList}</div>`
    );

    return modifiedTemplate;
  };

  const handleGitHubUpload = async () => {
    try {
      setLoading(true);
      setError('');
      setSuccess('');

      // Simulate GitHub API calls
      await new Promise(resolve => setTimeout(resolve, 2000));

      // In a real scenario, you'd use the GitHub API to:
      // 1. Create a new repository
      // 2. Upload the index.html file
      // 3. Enable GitHub Pages

      setSuccess('Your landing page has been successfully uploaded and deployed! You can view it at: https://yourusername.github.io/your-landing-page');
    } catch (err) {
      setError('Failed to upload to GitHub. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 p-4 overflow-auto">
        <Card>
          <CardHeader>Edit Your Landing Page</CardHeader>
          <CardContent>
            <Input
              value={modifications.title}
              onChange={(e) => updateModification('title', e.target.value)}
              placeholder="Page Title"
              className="mb-4"
            />
            <Textarea
              value={modifications.subtitle}
              onChange={(e) => updateModification('subtitle', e.target.value)}
              placeholder="Subtitle"
              className="mb-4"
            />
            {modifications.features.map((feature, index) => (
              <Input
                key={index}
                value={feature}
                onChange={(e) => updateModification('features', e.target.value, index)}
                placeholder={`Feature ${index + 1}`}
                className="mb-2"
              />
            ))}
            {modifications.testimonials.map((testimonial, index) => (
              <div key={index} className="mb-4">
                <Textarea
                  value={testimonial.text}
                  onChange={(e) => updateModification('testimonials', { ...testimonial, text: e.target.value }, index)}
                  placeholder={`Testimonial ${index + 1}`}
                  className="mb-2"
                />
                <Input
                  value={testimonial.author}
                  onChange={(e) => updateModification('testimonials', { ...testimonial, author: e.target.value }, index)}
                  placeholder="Author"
                />
              </div>
            ))}
            {modifications.pricingPlans.map((plan, index) => (
              <div key={index} className="mb-4">
                <Input
                  value={plan.name}
                  onChange={(e) => updateModification('pricingPlans', { ...plan, name: e.target.value }, index)}
                  placeholder="Plan Name"
                  className="mb-2"
                />
                <Input
                  value={plan.price}
                  onChange={(e) => updateModification('pricingPlans', { ...plan, price: e.target.value }, index)}
                  placeholder="Price"
                />
              </div>
            ))}
            <Button onClick={handleGitHubUpload} disabled={loading}>
              {loading ? 'Uploading...' : 'Create and Deploy Landing Page'}
            </Button>
            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
            {success && <Alert variant="success"><AlertDescription>{success}</AlertDescription></Alert>}
          </CardContent>
        </Card>
      </div>
      <div className="w-full md:w-1/2 p-4 overflow-auto">
        <Card>
          <CardHeader>Preview</CardHeader>
          <CardContent>
            <div dangerouslySetInnerHTML={{ __html: generateModifiedHTML() }} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LandingPageCreator;
