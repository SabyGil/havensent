import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal'

class Footer extends Component {
  constructor(){
    super()
    this.state = {
      terms: false,
      policy:false
    }
    this.togglePolicy = this.togglePolicy.bind(this)
    this.toggleTerms = this.toggleTerms.bind(this)
  }

  toggleTerms(){
    this.setState({
      terms: !this.state.terms
    })
  }
  togglePolicy(){
    this.setState({
      policy: !this.state.policy
    })
  }
  render(){
    console.log(this.props)
    return (
      <div className='about-us-container'>

          <section className='about-us fixed-width'>
            <div className='about-us-col'>
              <h1>About Us</h1>
              <p>
                Havensent safely voices your needs so that important resources are brought to
                your safe havens - the schools, houses of worship, and community centers you attend regularly. With Havensent,
                these safe havens can get more funding and our communities get what they need.
              </p>
              <p>Send your questions and comments on our Facebook page</p>
              <a onClick={this.togglePolicy}>Privacy Policy</a>
              <a onClick={this.toggleTerms}>Terms of Use</a>
            </div>

            <div className='about-us-col social-media'>
              <span><i className="fab fa-facebook"></i></span>
            </div>
          </section>

        <footer>
          <span>©2018 Havensent</span>
        </footer>

        <Modal
                  isOpen={this.state.policy}
                  onRequestClose={this.togglePolicy}
                  className='footer-page-modals'
                  overlayClassName='overlay'
                  >
                  <div className="footer-content">
                    Havensent Privacy Policy<br/>
Last modified: [June 20, 2018]<br/>
Introduction<br/>
<strong>PLEASE READ THIS PRIVACY POLICY CAREFULLY TO UNDERSTAND OUR POLICIES AND PRACTICES REGARDING YOUR INFORMATION AND HOW WE WILL TREAT IT. IF YOU DO NOT AGREE WITH OUR POLICIES AND PRACTICES, DO NOT DOWNLOAD, REGISTER WITH OR USE THIS APP. BY DOWNLOADING, REGISTERING WITH OR USING THIS APP OR ITS ACCOMPANYING WEBSITE, YOU AGREE TO THIS PRIVACY POLICY. THIS POLICY MAY CHANGE FROM TIME TO TIME, AS REFLECTED BY THE DATE ABOVE. YOUR CONTINUED USE OF THIS APP AFTER WE MAKE CHANGES IS DEEMED TO BE ACCEPTANCE OF THOSE CHANGES, SO PLEASE CHECK THE POLICY PERIODICALLY FOR UPDATES.</strong><br/>
<p>GrantAnswers LLC (“GrantAnswers”, “Company”, or “We”), the owner of Havensent, respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes:</p><br/>
<ul>
<li>The types of information we may collect or that you may provide when you purchase, download, install, register with, access or use our Havensent application (the “App”) or our Havensent website (the “Website”)</li>
<li>Our practices for collecting, using, maintaining, protecting and disclosing that information.</li>
</ul>
<p>This policy applies only to information we collect in this App or Website, and in e-mail and other electronic communications sent through or in connection with this App or Website.</p>
<p>Unless explicitly stated otherwise in writing by us, this policy DOES NOT apply to information that:</p>
<ul>
<li>We collect offline or via any other Company apps or websites, including websites you may access through this App or Website, including, for example, when accessing events or professional organization websites; or</li>
<li>You provide to us or is collected by any third party.</li>
</ul>
Such third parties may have their own privacy policies, which we encourage you to read before providing information on or through them.
Children under the Age of 13
Neither the App nor Website is intended for children under 13 years of age, and we do not knowingly collect personal information from children under 13. If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 13, please contact us at grantanswers.com@gmail.com.
Information We Collect and How We Collect It
We collect information from and about users of our App or Website:
Directly from you when you provide it to us.
Automatically when you use the App or Website.
Information You Provide to Us
When you download, register with or use this or Website, we may ask you to provide information:
By which you or your organization may be personally identified, such as name, e-mail address, a profile picture, or other identifier by which you or your organization may be contacted online or offline or any other information that is defined as personal or personally identifiable information under applicable law (“personal information”).
That is about you but individually does not identify you, such as gender, zip code, age, job interest, employer, employment status, and educational attainment.
This information includes:
Information that you provide by filling in forms in the App or Website. This includes information provided at the time of registering to use the App or Website, registering for membership, posting material, and requesting further services. We may also ask you for information when you report a problem with the App or Website.
Records and copies of your correspondence (including e-mail addresses and phone numbers), if you contact us.
Your search queries on the App or Website.
Your location, attendance at or intent to attend events, or membership or interest in professional organizations
You may provide information to be published or displayed (“Posted”) on public areas of the App, Website or Social Media platforms (collectively, “User Contributions”). Your User Contributions are Posted and transmitted to others at your own risk. Although you may set certain privacy settings for such information by logging into your account profile, please be aware that no security measures are perfect or impenetrable. Additionally, we cannot control the actions of third parties with whom you may choose to share your User Contributions. Therefore, we cannot and do not guarantee that your User Contributions will not be viewed by unauthorized persons. Please see our Terms of Use for additional terms regarding your User Contributions.
Automatic Information Collection.
When you download, access and use the App or Website, it may use technology to automatically collect:
Usage Details. When you access and use the App or Website, we may automatically collect certain details of your access to and use of the App or Website, including traffic data, location data, usage and search logs, and other communication data and the resources that you access and use on or through the App or Website.
Device Information. We may collect information about your computer or mobile device and internet connection, including the device’s unique device identifier, IP address, operating system, browser type, mobile network information and the device’s telephone number.
Stored Information and Files. The App or Website also may access metadata, cookies and other information associated with other files stored on your device. This may include, for example, photographs, audio and video clips, personal contacts and address book information.
Location Information. This App or Website collects or may in the future collect real-time information about the location of your device. This may include zip code, city, or state. 
If you do not want us to collect this information, do not download or access the App or Website or delete it from your device and deactivate your account on the “account” page of the App or opt out from the collection of certain information as provided below; However, even when you opt out and we cease collecting information, you acknowledge that we may continue to maintain and use (in accordance with this policy) the data and information previously provided or collected. Note, however, that opting out of the App’s or Website’s collection of location information will cause its location-based features to be disabled.
How We Use Your Information
We use or may use information that we collect about you or that you provide to us, including any personal information, to:
Provide you with the App or Website and its contents, and any other information, products or services that you request from us.
Fulfill any other purpose for which you provide it.
Give you notices about your account or subscription, including expiration and renewal notices.
Carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.
Notify you when App or Website updates are available, and of changes to any products or services we offer or provide though it.
Provide you with relevant content on www.Havensent.com and the company’s Social Media accounts
Additionally, the usage information we collect helps us to improve our App and Website and to deliver a better and more personalized experience by enabling us to:
Estimate our audience size and usage patterns.
Store information about your preferences, allowing us to customize our App or Website according to your individual interests.
Speed up your searches.
Recognize you when you use the App or Website.
We use location information we collect to display the proximity of other users or career-related opportunities
We may also use your information to contact you about our own and third parties’ goods and services that may be of interest to you. If you do not want us to use your information in this way, please do not download the App or delete it from your device or log in to the app to deactivate your account .
Disclosure of Your Information
We may disclose aggregated information about our users without restriction. In addition, we may disclose personal information that we collect or you provide:
To our subsidiaries and affiliates.
To contractors, service providers and other third parties we use to support our business and who are bound by contractual obligations to keep personal information confidential and use it only for the purposes for which we disclose it to them.
To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution or other sale or transfer of some or all of GrantAnswers’ assets, whether as a going concern or as part of bankruptcy, liquidation or similar proceeding, in which personal information held by GrantAnswers about our App users is among the assets transferred.
To fulfill the purpose for which you provide it. For example, if you give us an e-mail address to use a referral feature of our App, we will transmit the contents of that e-mail and your e-mail address to the recipients.
For any other purpose disclosed by us when you provide the information.
With your consent.
To partners such as educational institutions, professional organizations, event organizers, or group purchase membership partners
To comply with any court order, law or legal process, including to respond to any government or regulatory request.
To enforce our rights arising from any contracts entered into between you and us, including the App’s and Website’s Terms of Use, and for billing and collection.
If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of GrantAnswers, our affiliates or customers or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction.
Your Choices about Our Collection, Use and Disclosure of Your Information
We strive to provide you with choices regarding the personal information you provide to us. This section describes mechanisms we provide for you to control certain uses and disclosures of your information.
Tracking Technologies. The App or Website may use tracking technologies, such as cookies. You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent.  If you disable or refuse cookies or block the use of other tracking technologies, some parts of the App or Website may then be inaccessible or not function properly.
Location Information. If the App or Website collects location information, you can choose whether or not to allow the App or Website to collect and use real-time information about your device’s location through the device’s privacy settings or by opting out in your account settings. If you block the use of location information, some parts of the App or Website may then be inaccessible or not function properly.
Promotion by the Company. If you do not want us to use your contact information, such as your email, to promote our own or third parties’ products or services, you can opt-out by notifying us at grantanswers.com@gmail.com
We do not control third parties’ collection or use of your information to serve interest-based advertising. However, these third parties may provide you with ways to choose not to have your information collected or used in this way. 
Accessing and Correcting Your Personal Information
You can review and change your personal information by logging into the App and visiting your account profile page.
You may also send us an e-mail at grantanswers.com@gmail.com to request access to, correct or delete any personal information that you have provided to us. We cannot delete your personal information except by also deleting your user account. We may not accommodate a request to change information if we believe the change would violate any law or legal requirement or cause the information to be incorrect.]
If you delete your User Contributions from the App or Website, copies of your User Contributions may remain viewable in cached and archived pages, or might have been copied or stored by other App or Website users, and you hereby consent to such continued access and use. Access and use of information provided on the App or Website, including User Contributions, is governed by our Terms of Use.
Your California Privacy Rights
California Civil Code Section 1798.83 permits users of our App or Website that are California residents to request certain information regarding our disclosure of personal information to third parties for their direct marketing purposes. To make such a request, please send an e-mail to grantanswers.com@gmail.com
Data Security
We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration and disclosure. All information you provide to us is stored on our or our vendors’ secure servers behind firewalls. Any payment transactions and personally identifiable information like name, username and password will be encrypted using SSL technology or other similar measures.
The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our App or Website, you are responsible for keeping this password confidential. We ask you not to share your password with anyone. We urge you to be careful about giving out information in public areas of the App or Website like message boards and Social Media platforms. The information you share in public areas may be viewed by any user of the App.
Unfortunately, the transmission of information via the internet and mobile platforms is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted through our App or Website. Any transmission of personal information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures we provide.
Changes to Our Privacy Policy
We may update our privacy policy from time to time. If we make material changes to how we treat our users’ personal information, we will post the new privacy policy on this page with a notice that the privacy policy has been updated.
The date the privacy policy was last revised is identified at the top of the page.  By maintaining your account, you agree to be bound by all updates and policies posted.
Contact Information
To ask questions or comment about this privacy policy and our privacy practices, contact us at at grantanswers.com@gmail.com

                  </div>
                </Modal>
                <Modal
                  isOpen={this.state.terms}
                  onRequestClose={this.toggleTerms}
                  className='footer-page-modals'
                  overlayClassName='overlay'
                  >
                  <div>
                    Last Modified: June 20, 2018

TERMS OF USE

THE HAVENSENT APP IS A PRODUCT OF GRANTANSWERS LLC (“GRANTANSWERS,” “WE” OR “US”).  THIS AGREEMENT (THESE “TERMS”) SETS FORTH THE TERMS AND CONDITIONS UNDER WHICH YOU, THE USER, MAY ACCESS AND USE THE HAVENSENT APP (THE “APP”) AND THE HAVENSENT WEBSITE (THE “WEBSITE”).

BY USING THE APP OR THE WEBSITE, YOU ARE KNOWINGLY AND WILLINGLY AGREEING TO BE BOUND BY THESE TERMS, AND THE HAVENSENT PRIVACY POLICY (THE “PRIVACY POLICY”), AVAILABLE HERE INCLUDING ANY UPDATES AND REVISIONS TO EITHER, AND UNDERSTAND THAT YOU ARE ENTERING INTO THESE TERMS AND THE PRIVACY POLICY IN ELECTRONIC FORM AND THAT, UPON ELECTRONIC ACCEPTANCE, THESE TERMS SHALL CONSTITUTE A BINDING AND ENFORCEABLE CONTRACT BETWEEN YOU AND GRANTANSWERS.

DESCRIPTION OF THE SERVICE.  The App and its website seek to provide users with Havensent empowers people to safely voice their needs to safe havens that serve them. With long-term data aggregation, safe havens get more funding, governments have better data to effect policy, and immigrants get resources they need at their safe havens, including, but not limited to the schools, houses of worship, and community centers they attend regularly.   The App and its Website additionally provide links to and contact information of organizations that provide services
RESTRICTIONS ON USE OF CONTENT.  The App and Website contain a variety of information, including descriptions, examples, listings of service provider organizations, and other information and materials ("Content").  Certain Content may be made available as separate files for download by you pursuant to these Terms ("Available Content"). You may review, download, copy, and use the Available Content solely for the non-commercial purpose of helping those in need secure vital resources.  You may not sell the Available Content or otherwise distribute it.  You will not use or disclose it or the App or Website to any third parties. 
USE OF THE APP.  By registering with the App or Website and agreeing to these Terms, you are agreeing to the following:
You will access and use the industry information and other Content provided solely for the purpose of helping those in need secure vital resources
You agree that while using the App or Website you will not upload, post or transmit to or distribute or otherwise publish through the App or Website any materials, which in GrantAnswers’ sole discretion: (A) are unlawful, threatening, harassing, profane, libelous, defamatory, inaccurate, deceptive, or racially or sexually offensive; (B) restrict or inhibit any other user from using the App or Website; (C) constitute or encourage conduct that would constitute a criminal offense or give rise to civil liability; (D) violate any agreement between you and any other person or business entity; (E) contain a virus or other harmful component, advertising of any kind, or false or misleading indications of origin or statements of fact; or (F) infringe any third party's copyright, patent, trademark, trade secret, or other proprietary right or rights of publicity or privacy. 
You agree that you will not: (A) impersonate or misrepresent your affiliation with any other person or entity or (B) attempt to gain unauthorized access to computer systems (including any data residing thereon) through the App or Website.  
You are responsible for obtaining and paying for any equipment or services, including Internet and local phone service access, through which you can access the App or Website.
 You grant the App or Website, its affiliates, partners, agents, third parties, sub-licensees and successors and assigns, and each other user who downloads any Content you may provide, a perpetual, nonexclusive, worldwide, royalty-free, fully paid up, irrevocable license, for all media, to (A) use, copy, modify and create derivative works from the Content; (B) publicly perform and display, and distribute such Content and any modified form or derivative work based on the Content; and (C) sublicense to third parties the foregoing rights, including the right to sublicense to further third parties, as necessary or advisable (as determined by us or our agent in our sole discretion) for non-commercial purposes.
The App or Website may keep your Content indefinitely and disclose it for any purpose, including to: (A) comply with legal process; (B) enforce these Terms; (C) respond to claims that any Content violates the rights of third parties; or (D) without undertaking a duty to do so, protect the rights, property, or personal safety of the App or Website, its users and the public.
REGISTRATION AND CREATING PROFILES.  For some areas of the App or Website, you may have to complete a registration process or create a profile.  Completion of the process may require you to create an account with a username and password or other identifier which you agree not to share, as it is personal to you as an individual, and to guard as confidential information—if you are careless with it, others may be able to access the information.  You agree you will be responsible for all uses of your username or other identifier, even if someone else used your identifier. 
You agree to provide accurate, current and complete information at all times.  You also agree that you will review, maintain, correct, and update such information in a timely manner to maintain its accuracy and completeness.  If you provide (or the App or Website have reasonable grounds to believe that you provided) any information that is inaccurate, not current, incomplete or otherwise in violation of these terms or applicable law, we may suspend or terminate your access to the App or your participation in a program, in addition to exercising all rights and remedies allowed by law.
TRADEMARKS.  The names HAVENSENT, GRANTANSWERS and any other trademarks used on the App or Website belong to GrantAnswers, or their respective trademark owners. The names of actual companies and products mentioned on the App or Website may be the trademarks of its respective owners. You may not use any of the above or other trademarks displayed on the App or Website or in any Content. All rights are reserved.
AMENDMENTS.  You agree that from time to time GrantAnswers may alter (including adding or eliminating all or parts of provisions) these Terms and the Privacy Policy.  Amended versions of these Terms will take effect on the date specified for the amended version and will apply to all information that was collected before or after the effective date, including information in databases. You have no continuing right to use the App or our Website – each time you visit you will be subject to the version of the Terms in effect on your visit.  Those terms will change from time to time and the changes will be effective when they appear in a replacement version of these Terms as posted on or made available through the App or Website. You may not amend or revise these Terms or the Privacy Policy unless in a writing signed by us.
  Each time you return to the App or Website, you are responsible for checking the effective date of the then posted version of these Terms.  If it is later than the date of the version you last reviewed, the Terms have been changed and the new version should be reviewed before using the App. USE OF THE APP OR WEBSITE AFTER THE EFFECTIVE DATE OF ANY REVISED OR NEW TERMS WILL CONSTITUTE YOUR CONSENT TO SUCH TERMS, SO IF YOU DO NOT WANT TO BE BOUND BY AN AMENDED OR NEW VERSION, DO NOT USE THE APP OR WEBSITE AND CEASE ALL USE OF THE CONTENT OR SERVICES. 
PRIVACY.  The Privacy Policy found here contains additional information about how your information (including information that will not be publicly viewable) will and will not be used, and you agree to be bound by such Privacy Policy, as may be amended.  
DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY:  Although GrantAnswers strives to provide accurate information through the App or Website, you acknowledge and agree that your use of the App or Website is subject to the following disclaimers and limitations of liability:
Disclaimer of Warranties:  ALL CONTENT IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. GRANTANSWERS EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, WARRANTIES AS TO CORRECTNESS OR TIMELINESS OF ANY CONTENT AND THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.  ANY CONTENT DOWNLOADED FROM OR OTHERWISE OBTAINED THROUGH THE APP OR WEBSITE IS AT YOUR OWN RISK.  YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA RESULTING FROM SUCH DOWNLOAD OR USE.  
Limitation of Liability. UNDER NO CIRCUMSTANCES, INCLUDING NEGLIGENCE, WILL GRANTANSWERS, ITS SUBSIDIARIES, AFFILIATES, OFFICERS, DIRECTORS, ADVISORS, LICENSEES OR CONTENT PROVIDERS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE OR CONSEQUENTIAL DAMAGES THAT RESULT FROM YOUR USE OF OR INABILITY TO USE THE APP OR OUR WEBSITE, INCLUDING BUT NOT LIMITED TO RELIANCE ON INFORMATION OBTAINED VIA THE APP OR WEBSITE, MISTAKES, OMISSIONS, INTERRUPTIONS, LOSS OF OR DAMAGE TO DATA, ERRORS, DEFECTS, VIRUSES, DELAYS IN OPERATION OR TRANSMISSION, OR ANY FAILURE OF PERFORMANCE, . YOU HEREBY ACKNOWLEDGE THAT THIS PROVISION WILL APPLY WHETHER OR NOT GRANTANSWERS IS GIVEN NOTICE OF THE POSSIBILITY OF SUCH DAMAGES AND THAT THIS PROVISION WILL APPLY TO ALL CONTENT OR SERVICES THAT MAY BE AVAILABLE FROM TIME TO TIME VIA THE APP OR WEBSITE OR FROM GRANTANSWERS OR ITS SUBSIDIARIES AND AFFILIATES.
Exclusions and Limitations:  Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. Accordingly, some of the above limitations may not apply to you; however, you agree that such exclusions and limitations shall apply to the greatest extent permitted by law.
INDEMNITY.  You agree to defend, indemnify and hold harmless GrantAnswers, its subsidiaries, affiliates, officers, directors, employees, agents and licensees from any claims, losses, damages, expenses, demands, and costs (including without limitation reasonable attorneys fees), made by any third party arising out of or relating to your use of the App or Website, your connection to the App or Website, your violation of these Terms, or your violation of any rights of another.
WARNING AGAINST HACKERS.  It is possible that other users or unauthorized "hackers" may post or transmit offensive or obscene materials to or from the App or Website and that you may be involuntarily exposed to such materials. It may also be possible for other users or "hackers" to obtain personal information about you.  By using the App or Website, you assume the risk of such occurrences.
TERMINATION.  You have no continuing right to use the App and GrantAnswers may deny or suspend access, or terminate or cancel this agreement (and your account) without liability, with or without cause and at any time and without prior notice. Termination or cancellation will not eliminate your obligations and covenants, and you will still be liable for obligations and covenants existing prior to termination or access ended.
GOVERNING LAW AND EXCLUSIVE JURISDICTION.  These Terms and Conditions shall be governed by the laws of the State of New York, without regard to its conflicts of law principals.  You hereby submit to the exclusive jurisdiction of the state and federal courts located in New York, New York, for any action or proceeding relating to or arising from these Terms, and you expressly waive any objection you may have to such jurisdiction or the non-convenience of such forum.
WAIVER OF JURY TRIAL. Each party acknowledges and agrees that any controversy that may arise under these Terms or the Privacy Policy is likely to involve complicated and difficult issues and, therefore, each such party irrevocably and unconditionally waives any right it may have to a trial by jury in respect of any legal action arising out of or relating to these Terms or the Privacy Policy.  Each party to these Terms certifies and acknowledges that (a) no representative of any other party has represented, expressly or otherwise, that such other party would not seek to enforce the foregoing waiver in the event of a legal action, (b) such party has considered the implications of this waiver, (c) such party makes this waiver voluntarily, and (d) such party has been induced to enter into these Terms by, among other things, the mutual waivers and certifications in this Section 13.
MISCELLANEOUS TERMS:  
Entire Agreement; Severability.  These Terms and the Privacy Policy (including any amendments to either) and any: (A) notices, terms and items incorporated into any of them; (B) additional terms and conditions contained on the App or Website for particular activities or Content; and (C) our disclosures and your consents provided on or in connection with the App or Website or any Content, service or other activity; constitute the entire agreement between you and the App regarding the subject matter of the foregoing (collectively, "Entire Agreement").  If any provision of the Entire Agreement is held by a court of competent jurisdiction to be invalid or unenforceable, then such provision shall be enforced to the maximum extent permissible so as to affect the intent of the Entire Agreement, and the remainder of the Entire Agreement shall continue in full force and effect.  
No Waiver.  The failure by either you or GrantAnswers to exercise or enforce any rights or provisions of the Entire Agreement shall not constitute a waiver of such right or provision or any other provision of the Entire Agreement. 
Survival.  All provisions in the Entire Agreement regarding representations and warranties, indemnification, disclaimers and limitations on liability shall survive any termination of the Entire Agreement. 
Headings.  The headings hereof are descriptive only and not to be construed in interpreting the provisions of the Entire Agreement. 
Please direct questions regarding this Agreement to the Chief Executive Officer, at grantanswers.com@gmail.com.


                  </div>
                </Modal>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return state.user
}

export default connect(mapStateToProps)(Footer);
