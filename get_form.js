// Copyright 2022 Google LLC

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
 
// https://github.com/googleapis/google-api-nodejs-client#installation
// [START forms_retrieve_contents]
'use strict';
///  npm install @googleapis/forms
const path = require('path');
const google = require('@googleapis/forms');
const {authenticate} = require('@google-cloud/local-auth');

const formID = '1L0HLsv2M8WjPMlIe-xaGnbjOpkns7vT8I8aa0ze97Us';

async function runSample(query) {
  const auth = await authenticate({
    keyfilePath: path.join(__dirname, 'credentials.json'),
    scopes: 'https://www.googleapis.com/auth/forms.body.readonly',
  });
  const forms = google.forms({
    version: 'v1',
    auth: auth,
  });
  const res = await forms.forms.get({formId: formID});
  console.log(res.data);
  return res.data;
}

if (module === require.main) {
  runSample().catch(console.error);
}
module.exports = runSample;

// [END forms_retrieve_contents]
