import React from 'react';
import {
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import sharedConfirmStyles from '../sharedStyles/confirmPopoverStyles';
import sharedPopoverStyles from '../sharedStyles/popoverStyles';

const headerStyle = { color: 'white', fontSize: 24, marginBottom: 15, marginTop: 20 };
const paragraphHeader = { color: 'white', fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginTop: 10 };
const paragraphStyle = { color: 'white', fontSize: 18, marginBottom: 10 };

const PrivacyPopover = ({ close, show }) => (
  <Modal
    animationType="slide"
    transparent
    visible={show}
  >
    <View style={sharedPopoverStyles.container}>
      <View style={sharedConfirmStyles.main}>
        <View style={sharedConfirmStyles.header}>
          <View style={{ width: 20 }} />
          <Text style={sharedConfirmStyles.title}>
            Privacy Policy
          </Text>
          <TouchableOpacity style={{ height: '100%' }} onPress={close}>
            <Icon name="times" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <Text style={headerStyle}>
            This Application collects some Personal Data from its Users
          </Text>
          <Text style={paragraphStyle}>
            Personal Data collected for the following purposes and using the following services:
          </Text>
          <Text style={paragraphStyle}>
            &bull; Facebook account access: About Me, Friend List, and Email
          </Text>
          <Text style={paragraphStyle}>
            &bull; Personal Data: geographic position
          </Text>
          <Text style={headerStyle}>
            Owner and Data Controller Types of Data collected
          </Text>
          <Text style={paragraphStyle}>
            Among the types of Personal Data that this Application collects, by itself or through third parties, there are: geographic position, Cookies and Usage Data.
          </Text>
          <Text style={paragraphStyle}>
            Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection. The Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using this Application.
          </Text>
          <Text style={paragraphStyle}>
            All Data requested by this Application is mandatory and failure to provide this Data may make it impossible for this Application to provide its services. In cases where this Application specifically states that some Data is not mandatory, Users are free not to communicate this Data without any consequences on the availability or the functioning of the service.
          </Text>
          <Text style={paragraphStyle}>
            Any use of Cookies – or of other tracking tools – by this Application or by the owners of third-party services used by this Application serves the purpose of providing the service required by the User, in addition to any other purposes described in the present document and in the Cookie Policy, if available. Users are responsible for any third-party Personal Data obtained, published or shared through this Application and confirm that they have the third party&#8217;s consent to provide the Data to the Owner.
          </Text>
          <Text style={headerStyle}>
            Mode and place of processing the Data
          </Text>
          <Text style={paragraphHeader}>
            Methods of processing:
          </Text>
          <Text style={paragraphStyle}>
            The Data Controller processes the Data of Users in a proper manner and shall take appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data.
          </Text>
          <Text style={paragraphStyle}>
            The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Data Controller, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of the site (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Data Controller at any time.
          </Text>
          <Text style={paragraphHeader}>
            Retention time:
          </Text>
          <Text style={paragraphStyle}>
            The Data is kept for the time necessary to provide the service requested by the User, or stated by the purposes outlined in this document, and the User can always request that the Data Controller suspend or remove the data.
          </Text>
          <Text style={headerStyle}>
            The use of the collected Data
          </Text>
          <Text style={paragraphStyle}>
            The Data concerning the User is collected to allow the Owner to provide its services, as well as for the following purposes: Access to third-party accounts, Location-based interactions and Interaction with external social networks and platforms.
          </Text>
          <Text style={paragraphStyle}>
            The Personal Data used for each purpose is outlined in the specific sections of this document.
          </Text>
          <Text style={headerStyle}>
            Facebook permissions asked by this Application
          </Text>
          <Text style={paragraphStyle}>
            This Application may ask for some Facebook permissions allowing it to perform actions with the User&#8217;s Facebook account and to retrieve information, including Personal Data, from it. This service allows this Application to connect with the User&#8217;s account on the Facebook social network, provided by Facebook Inc.
          </Text>
          <Text style={paragraphStyle}>
            The permissions asked are the following:
          </Text>
          <Text style={paragraphStyle}>
            Basic information: By default, this includes certain User’s Data such as id, name, picture, gender, and their locale. Certain connections of the User, such as the Friends, are also available. If the User has made more of their Data public, more information will be available.
          </Text>
          <Text style={paragraphStyle}>
            About Me: Provides access to the About Me section of the profile.
          </Text>
          <Text style={paragraphStyle}>
            Friend List: Provides access to any friend lists the User created.
          </Text>
          <Text style={paragraphStyle}>
            Email: Provides access to the User&#8217;s primary email address.
          </Text>
          <Text style={headerStyle}>
            Additional information about Data collection and processing
          </Text>
          <Text style={paragraphHeader}>
            Legal action
          </Text>
          <Text style={paragraphStyle}>
            The User&#8217;s Personal Data may be used for legal purposes by the Data Controller, in Court or in the stages leading to possible legal action arising from improper use of this Application or the related services. The User declares to be aware that the Data Controller may be required to reveal personal data upon request of public authorities.
          </Text>
          <Text style={paragraphHeader}>
            Additional information about User&#8217;s Personal Data
          </Text>
          <Text style={paragraphStyle}>
            In addition to the information contained in this privacy policy, this Application may provide the User with additional and contextual information concerning particular services or the collection and processing of Personal Data upon request.
          </Text>
          <Text style={paragraphHeader}>
            System logs and maintenance
          </Text>
          <Text style={paragraphStyle}>
            For operation and maintenance purposes, this Application may collect files that record interaction with this Application (System logs) or use for this purpose other Personal Data (such as IP Address).
          </Text>
          <Text style={paragraphHeader}>
            Information not contained in this policy
          </Text>
          <Text style={paragraphStyle}>
            More details concerning the collection or processing of Personal Data may be requested from the Data Controller at any time. Please see the contact information at the beginning of this document.
          </Text>
          <Text style={paragraphHeader}>
            The rights of Users
          </Text>
          <Text style={paragraphStyle}>
            Users have the right, at any time, to know whether their Personal Data has been stored and can consult the Data Controller to learn about their contents and origin, to verify their accuracy or to ask for them to be supplemented, cancelled, updated or corrected, or for their transformation into anonymous format or to block any data held in violation of the law, as well as to oppose their treatment for any and all legitimate reasons. Requests should be sent to the Data Controller at the contact information set out above.
          </Text>
          <Text style={paragraphStyle}>
            This Application does not support “Do Not Track” requests. To determine whether any of the third-party services it uses honor the “Do Not Track” requests, please read their privacy policies.
          </Text>
          <Text style={paragraphHeader}>
            Changes to this privacy policy
          </Text>
          <Text style={paragraphStyle}>
            The Data Controller reserves the right to make changes to this privacy policy at any time by giving notice to its Users on this page. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom. If a User objects to any of the changes to the Policy, the User must cease using this Application and can request that the Data Controller remove the Personal Data. Unless stated otherwise, the then-current privacy policy applies to all Personal Data the Data Controller has about Users.
          </Text>
          <Text style={{ color: 'white', fontSize: 14, marginTop: 10 }}>
            Latest update: February 13, 2018
          </Text>
        </ScrollView>
        <View style={sharedConfirmStyles.footer}>
          <TouchableOpacity
            style={[ sharedConfirmStyles.button, sharedConfirmStyles.ok ]}
            onPress={close}
          >
            <Text style={sharedConfirmStyles['ok-text']}>
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

export default PrivacyPopover;
