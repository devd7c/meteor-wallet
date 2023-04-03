import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
// eslint-disable-next-line import/no-unresolved
import { RoutePaths } from '../ui/RoutePaths';

Accounts.emailTemplates.resetPassword.html = (user, url) =>
`Hello, <br /><br /> ${user} Reset your password with this link: ${url}`;

Accounts.urls.resetPassword = (token) => Meteor.absoluteUrl(`${RoutePaths.RESET_PASSWORD.substring(1)}/${token}`);
