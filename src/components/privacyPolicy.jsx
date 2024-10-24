import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1>Privacy Policy</h1>
      <p>Last updated: October 10, 2024</p>
      <p>
        This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information 
        when You use the Service and tells You about Your privacy rights and how the law protects You.
      </p>
      <p>
        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and 
        use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the.
      </p>

      <h2>Interpretation and Definitions</h2>
      <h3>Interpretation</h3>
      <p>
        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall 
        have the same meaning regardless of whether they appear in singular or in plural.
      </p>

      <h3>Definitions</h3>
      <p>For the purposes of this Privacy Policy:</p>
      <ul>
        <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
        <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for election of directors or other managing authority.</li>
        <li><strong>Company</strong> (referred to as either "the Company", "We", "Us", or "Our" in this Agreement) refers to Tour Planer.</li>
        <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device, or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
        <li><strong>Country</strong> refers to Madhya Pradesh, India.</li>
        <li><strong>Device</strong> means any device that can access the Service, such as a computer, a cellphone, or a digital tablet.</li>
        <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
        <li><strong>Service</strong> refers to the Website.</li>
        <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service, or to assist the Company in analyzing how the Service is used.</li>
        <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
        <li><strong>Website</strong> refers to Tour Planer, accessible from <a href="https://tourplaner.in/" target="_blank" rel="noopener noreferrer">https://tourplaner.in/</a></li>
        <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
      </ul>

      <h2>Collecting and Using Your Personal Data</h2>
      <h3>Types of Data Collected</h3>
      <h4>Personal Data</h4>
      <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
      <ul>
        <li>Email address</li>
        <li>First name and last name</li>
        <li>Phone number</li>
        <li>Usage Data</li>
      </ul>

      <h4>Usage Data</h4>
      <p>
        Usage Data is collected automatically when using the Service. It may include information such as Your Device's Internet Protocol address (e.g., IP address), 
        browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device 
        identifiers, and other diagnostic data.
      </p>

      <h4>Tracking Technologies and Cookies</h4>
      <p>
        We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used include 
        beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
      </p>
      <ul>
        <li><strong>Cookies or Browser Cookies:</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent.</li>
        <li><strong>Web Beacons:</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (clear gifs, pixel tags, single-pixel gifs).</li>
      </ul>

      <h3>Use of Your Personal Data</h3>
      <p>The Company may use Personal Data for the following purposes:</p>
      <ul>
        <li><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</li>
        <li><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service.</li>
        <li><strong>For the performance of a contract:</strong> to develop, comply with, and undertake the contract for the products or services You have purchased.</li>
        <li><strong>To contact You:</strong> To contact You by email, telephone, SMS, or other electronic communication regarding updates or important service-related information.</li>
        <li><strong>To provide You</strong> with news and information similar to the products or services You've purchased unless opted out.</li>
        <li><strong>For business transfers:</strong> We may use Your information during mergers, divestitures, or acquisitions of Company assets.</li>
        <li><strong>For other purposes:</strong> We may use Your information for data analysis, identifying usage trends, and improving our Service.</li>
      </ul>

      <h3>Retention of Your Personal Data</h3>
      <p>We will retain Your Personal Data only for as long as necessary for the purposes set out in this Privacy Policy. Usage Data is typically retained for a shorter period, except for improving our Service or for legal compliance.</p>

      <h3>Transfer of Your Personal Data</h3>
      <p>Your information may be transferred to computers in countries where data protection laws differ. Your consent to this Privacy Policy allows for that transfer.</p>

      <h3>Delete Your Personal Data</h3>
      <p>You have the right to delete Personal Data collected by Us, unless We are required to retain it for legal reasons.</p>

      <h3>Security of Your Personal Data</h3>
      <p>We strive to use commercially acceptable means to protect Your Personal Data, though no transmission or storage method is completely secure.</p>

      <h2>Children's Privacy</h2>
      <p>We do not knowingly collect information from individuals under the age of 13 without parental consent.</p>

      <h2>Links to Other Websites</h2>
      <p>Our Service may contain links to other websites. We strongly advise You to review the Privacy Policy of each site you visit.</p>

      <h2>Changes to this Privacy Policy</h2>
      <p>We may update Our Privacy Policy from time to time and will notify You of any changes via email or prominent notice on Our Service.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, You can contact us:</p>
      <ul>
        <li>By email: Tourplnr@gmail.com</li>
        <li>By phone number: 9319959557</li>
      </ul>
      <Link to="/" style={styles.link}>Go Back</Link>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '900px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
  },
  link: {
    color: 'blue',
  }
};

export default PrivacyPolicy;
