'use strict';

const path = require('path');
const google = require('@googleapis/forms');
const {
  authenticate,
} = require('@google-cloud/local-auth');

const formID = '1L0HLsv2M8WjPMlIe-xaGnbjOpkns7vT8I8aa0ze97Us';

async function runSample(query) {
  const auth = await authenticate({
    keyfilePath: path.join(__dirname, 'credentials.json'),
    scopes: 'https://www.googleapis.com/auth/forms.responses.readonly',
  });
  const forms = google.forms({
    version: 'v1',
    auth: auth,
  });
  const res = await forms.forms.responses.list({
    formId: formID,
  });
  console.log(res.data);
  return res.data;
}

if (module === require.main) {
  runSample().catch(console.error);
}
module.exports = runSample;

// [END forms_retrieve_all_responses]