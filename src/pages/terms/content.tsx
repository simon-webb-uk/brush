import * as React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';

export default function Terms() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="body1" sx={{ mb: 3 }}>
        These Terms govern your use of Brush (the "Platform") to book dental
        appointments with our Partners (dental practices). We’re a booking
        service only (not medical providers) designed to make dental care
        accessible. By using Brush, you agree to these Terms. Questions? Email{' '}
        <Link href="mailto:terms@trybrush.com">terms@trybrush.com</Link>
      </Typography>

      {/* 1. Introduction */}
      <Typography variant="h5" component="h2" gutterBottom>
        1. Introduction
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Brush Labs Limited ("we," "us," or "Brush"), registered in England,
        operates the Platform to connect patients with dental Partners for
        appointments. Our mission is to simplify dental care access with a
        national booking system. We facilitate bookings but don’t provide dental
        care. These Terms apply to all users during the pilot phase and future
        expansions. Check{' '}
        <Link href="https://trybrush.com" target="_blank" rel="noopener">
          trybrush.com
        </Link>{' '}
        for updates.
      </Typography>

      {/* 2. Eligibility and Accounts */}
      <Typography variant="h5" component="h2" gutterBottom>
        2. Eligibility and Accounts
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        You must be 18+ (or have guardian consent for minors) to use the
        Platform. Provide accurate details, including health info (e.g.,
        allergies) relevant to treatment. No account creation is required for
        bookings during the pilot. Use our instant search. Keep any provided
        contact info secure; you’re responsible for activity.
      </Typography>

      {/* 3. Bookings and Payments */}
      <Typography variant="h5" component="h2" gutterBottom>
        3. Bookings and Payments
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Search and book emergency, general, check-up or cosmetic appointments
        instantly via the Platform. Available in the pilot areas (e.g.,
        Gloucestershire and Surrey) with no patient fees.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Payments are handled directly by Partners or via the Platform on their
        behalf. Taxes are managed by Partners.
      </Typography>

      {/* 4. Cancellations and Refunds */}
      <Typography variant="h5" component="h2" gutterBottom>
        4. Cancellations and Refunds
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        During the pilot phase (e.g. Gloucestershire and Surrey, Q3 2025),
        bookings are passed directly to your chosen dental practice (Partner)
        after confirmation on the Platform. Rescheduling or cancelling isn’t
        available via the Platform. Please contact the Partner directly for any
        changes.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Each Partner sets its own cancellation policy, disclosed before booking
        as part of their terms, which may include fees for late cancellations or
        no-shows. Refunds, if any, are at the sole discretion of the Partner and
        not Brush. We facilitate bookings but do not handle, decide, or
        guarantee refunds. Partners may waive fees case-by-case.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        If a Partner cancels, they’ll typically waive fees, and Brush will
        notify you to rebook. Statutory rights under the Consumer Rights Act
        2015 or Consumer Contracts Regulations 2013 apply (e.g., cooling-off
        periods for distance contracts, though exceptions exist for urgent
        health services like dental care if treatment begins with consent).
      </Typography>

      {/* 5. Partner Services and Liabilities */}
      <Typography variant="h5" component="h2" gutterBottom>
        5. Partner Services and Liabilities
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Partners provide dental care, so please disclose health conditions
        (e.g., gum disease) to them when booking.{' '}
        <em>
          It’s your responsibility to inform the Partner of any medical
          conditions that might affect treatment. If undisclosed, neither Brush
          nor the Partner is liable for resulting injury or loss.
        </em>
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Brush liability is limited to direct negligence in facilitating
        bookings. We’re not responsible for Partner services, outcomes, or
        compliance with NHS/private standards.
      </Typography>

      {/* 6. Intellectual Property */}
      <Typography variant="h5" component="h2" gutterBottom>
        6. Intellectual Property
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Platform content (e.g., booking guides, Brontë’s story) is owned by
        Brush Labs Limited. Use it for personal, non-commercial purposes only.
        Reproducing content (e.g., reviews) requires permission.
      </Typography>

      {/* 7. Data and Privacy */}
      <Typography variant="h5" component="h2" gutterBottom>
        7. Data and Privacy
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        At Brush, we prioritise your privacy, especially given the sensitive
        nature of dental health data. This section outlines what data we
        collect, how we use it, who we share it with, and your rights under UK
        and EU law. For full details, refer to our{' '}
        <Link href="/privacy">Privacy Policy</Link> and{' '}
        <Link href="/cookies">Cookie Policy</Link>.
      </Typography>

      {/* 7.1 */}
      <Typography variant="h6" component="h3" gutterBottom>
        7.1 Data We Collect
      </Typography>
      <Box component="ul" sx={{ pl: 3, mb: 3 }}>
        <li>
          <Typography variant="body1">
            <strong>Personal Data:</strong> We collect basic information to
            facilitate bookings, including your name, email address, and
            postcode. This helps us match you with available appointments in
            your area (e.g. Gloucestershire and Surrey).
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Health Information (Special Category Data):</strong> With
            your explicit consent, we may collect health related details (e.g.,
            dental history, symptoms like toothache, or allergies) provided
            during the booking process. This is shared with Partners to ensure
            safe treatment but is optional and can be withheld unless required
            by the Partner.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Usage Data:</strong> We track technical data (e.g., IP
            address, browser type) and interaction data (e.g., search terms,
            booking preferences) to optimise the Platform, particularly during
            the pilot phase.
          </Typography>
        </li>
      </Box>

      {/* 7.2 */}
      <Typography variant="h6" component="h3" gutterBottom>
        7.2 Purpose and Legal Basis for Processing
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        We process your data to:
      </Typography>
      <Box component="ul" sx={{ pl: 3, mb: 2 }}>
        <li>
          <Typography variant="body1">
            Enable bookings and confirm appointments with Partners (e.g.,
            Confident Dental and Love Teeth).
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Improve Platform functionality and optimize access (e.g., matching
            urgent needs to available slots).
          </Typography>
        </li>
      </Box>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>Legal Basis:</strong>
      </Typography>
      <Box component="ul" sx={{ pl: 3, mb: 3 }}>
        <li>
          <Typography variant="body1">
            Contractual necessity (to fulfill your booking request).
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Legitimate interests (to enhance service efficiency, e.g., AI triage
            for gum disease diagnostics, subject to impact assessments).
          </Typography>
        </li>
      </Box>

      {/* 7.3 */}
      <Typography variant="h6" component="h3" gutterBottom>
        7.3 Data Sharing and Third Parties
      </Typography>
      <Box component="ul" sx={{ pl: 3, mb: 3 }}>
        <li>
          <Typography variant="body1">
            <strong>Partners:</strong> We share your personal and health data
            (with consent) with dental practices (e.g., Confident Dental, Love
            Teeth) for treatment and scheduling. During the pilot, this will be
            limited to Gloucestershire and Surrey Partners.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Third-Party Services:</strong> Data may be shared with
            Dentally PMS (practice management software) for appointment
            coordination and secure storage. We also use payment processors with
            strict data-sharing agreements.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Data Sales:</strong> We may share your data with relevant
            third parties to optimise patient access and support our mission to
            bridge the supply and demand gap in dental care.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Service Providers:</strong> Analytics tools (e.g., Google
            Analytics) may process anonymised data to improve the Platform, with
            your consent for non-essential cookies.
          </Typography>
        </li>
      </Box>

      {/* 7.4 */}
      <Typography variant="h6" component="h3" gutterBottom>
        7.4 Data Security and Retention
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>Security Measures:</strong> Data is encrypted using
        industry-standard protocols (e.g., TLS) and stored on secure servers
        compliant with UK health data regulations (e.g., Data Protection Act
        2018, NHS Digital standards). Access is restricted to authorized
        personnel.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        <strong>Retention Period:</strong> Personal data is kept for as long as
        needed to fulfill bookings (typically 12 months post-appointment) or as
        required by law (e.g., 6 years for NHS audits). Health data is retained
        only with consent and deleted upon withdrawal unless the Partner
        requires it for treatment records.
      </Typography>

      {/* 7.5 */}
      <Typography variant="h6" component="h3" gutterBottom>
        7.5 Your Rights Under GDPR
      </Typography>
      <Box component="ol" sx={{ pl: 3, mb: 3 }}>
        <li>
          <Typography variant="body1">
            Access: Request a copy of your data.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Rectification: Correct inaccurate data.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Erasure: Delete your data (subject to legal obligations).
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Restriction: Limit processing (e.g., pause health data use).
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Objection: Oppose data use for marketing or analytics.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Portability: Transfer your data to another service.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Withdraw Consent: Opt out of health data sharing anytime via the
            Privacy Policy settings.
          </Typography>
        </li>
      </Box>
      <Typography variant="body1" sx={{ mb: 3 }}>
        To exercise these rights, submit a request at{' '}
        <Link href="mailto:privacy@trybrush.com">privacy@trybrush.com</Link>.
        We’ll respond within 30 days, per GDPR Article 12.
      </Typography>

      {/* 7.6 */}
      <Typography variant="h6" component="h3" gutterBottom>
        7.6 International Data Transfers
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        During the pilot, data stays within the UK. For future expansions,
        transfers will comply with GDPR adequacy decisions or standard
        contractual clauses, ensuring equivalent protection.
      </Typography>

      {/* 7.7 */}
      <Typography variant="h6" component="h3" gutterBottom>
        7.7 Cookies and Tracking
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        We use cookies for functionality (e.g., saved searches) and analytics
        (e.g., popular pilot areas). See our{' '}
        <Link href="/cookies">Cookie Policy</Link> for details and how to manage
        preferences. A consent banner will appear on first visit, compliant with
        GDPR.
      </Typography>

      {/* 7.8 */}
      <Typography variant="h6" component="h3" gutterBottom>
        7.8 Complaints and Contact
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        If concerned about data handling, contact us at{' '}
        <Link href="mailto:privacy@trybrush.com">privacy@trybrush.com</Link>.
        You can also lodge a complaint with the Information Commissioner’s
        Office (ICO) at{' '}
        <Link href="https://ico.org.uk" target="_blank" rel="noopener">
          ico.org.uk
        </Link>
        . For pilot specific queries, reach out to{' '}
        <Link href="mailto:contact@trybrush.com">contact@trybrush.com</Link>.
      </Typography>

      {/* 8. Governing Law and Disputes */}
      <Typography variant="h5" component="h2" gutterBottom>
        8. Governing Law and Disputes
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Governed by English law; English courts have jurisdiction. Resolve
        issues with Partners first. We’re able to assist, but can’t guarantee
        outcomes. Email{' '}
        <Link href="mailto:contact@trybrush.com">contact@trybrush.com</Link> for
        help.
      </Typography>

      {/* 9. Changes to Terms */}
      <Typography variant="h5" component="h2" gutterBottom>
        9. Changes to Terms
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        We may update these Terms as the Platform evolves (e.g., post pilot in
        2026). Check the date above or{' '}
        <Link href="https://trybrush.com" target="_blank" rel="noopener">
          trybrush.com
        </Link>{' '}
        for the latest version. Continued use after changes means acceptance.
      </Typography>

      {/* 10. Limitation of Liability and Disclaimer */}
      <Typography variant="h5" component="h2" gutterBottom>
        10. Limitation of Liability and Disclaimer
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        The Platform aims to address the 13% of adults unable to book dental
        appointments and enhance industry revenue (5–10%, £450M+). However,{' '}
        <em>
          "projections, intentions, and estimates involve risks and
          uncertainties. Actual performance may differ materially."
        </em>
      </Typography>
      <Typography variant="body1">
        No warranty on accuracy – not medical advice. Seek professional care.
        Save for fraud, no liability for losses from errors, omissions, or
        Partner actions. See <Link href="/legal-notice">Legal Notice</Link> for
        details.
      </Typography>
    </Container>
  );
}
