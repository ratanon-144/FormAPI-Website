
//https://developers.google.com/s/results/forms/api?q=rowQuestion&text=rowQuestion
//https://stackoverflow.com/questions/74681379/i-have-a-question-about-multiple-choice-grid-in-google-forms-api
//ปัญหาที่พบคือพยามสร้าง 
'use strict';
const path = require('path');
const google = require('@googleapis/forms');
const {
    authenticate,
} = require('@google-cloud/local-auth');

async function runSample(query) {
    const authClient = await authenticate({
        keyfilePath: path.join(__dirname, 'credentials.json'), /// เปลี่ยน clientId ทีไฟล์ credentials.json
        scopes: 'https://www.googleapis.com/auth/drive',
    });
    // console.log();
    const forms = google.forms({
        version: 'v1',
        auth: authClient,
    });

    const newForm = {
        'info': {
            title: 'ข้อวิชา NetWork', documentTitle: 'รหัสนักศึกษา 63015144',
        },
    };
    const update = {
        requests: [
            {
                createItem: {
                    item: {
                        title: "1. SUBNET MASK 255.255.255.192 มีการ IP ที่ใช้งานได้จริงกี่ IP",
                        description: "ตอบคำตอบข้อความ",

                        questionItem: {
                            question: {
                                "textQuestion": {
                                    "paragraph": false
                                }
                            },

                        },
                    },
                    location: { index: 0 },
                },
            }, {
                createItem: {
                    item: {
                        title: "2. SUBNET MASK 255.255.255.254 มีการ IP ที่ใช้งานได้จริงกี่ IP",
                        description: "ตอบคำตอบข้อความ",
                        questionItem: {
                            question: {
                                "textQuestion": {
                                    "paragraph": true
                                }
                            },
                        },
                    },
                    location: { index: 1 },
                },
            }, {
                createItem: {
                    item: {
                        title: "3. โปรโตคอลใดที่รับผิดชอบในการควบคุมขนาดของเซ็กเมนต์และอัตราที่เซ็กเมนต์ถูกแลกเปลี่ยนระหว่างเว็บไคลเอ็นต์และเว็บเซิร์ฟเวอร์",
                        description: "เลือกคำตอบที่ถูกต้องเพียงข้อเดียว",
                        questionItem: {
                            question: {
                                choiceQuestion: {
                                    type: "RADIO",
                                    options: ["TCP", "IP", "HTTP", "Etheernet"].map((e) => ({
                                        value: e,
                                    })),
                                },
                            },
                        },
                    },
                    location: { index: 2 },
                },
            }, {
                createItem: {
                    item: {
                        title: "4. ที่อยู่ IP สามช่วงใดที่สงวนไว้สำหรับการใช้งานส่วนตัว (internal private)?",
                        description: "เลือกคำตอบที่ถูกต้อง 3 คำตอบ",
                        questionItem: {
                            question: {
                                choiceQuestion: {
                                    type: "CHECKBOX",
                                    options: ["10.0.0.0/8", "64.100.0.0/14", "127.16.0.0/12", "172.16.0.0/12", "192.31.7.0/24", "192.168.0.0/16"].map((e) => ({
                                        value: e,
                                    })),
                                },
                            },
                        },
                    },
                    location: { index: 3 },
                },
            }, {
                createItem: {
                    item: {
                        title: "5. Which device performs the function of determining the path that messages should take through internetworks",
                        description: "เลือกคำตอบเพียงคำตอบเดียว",
                        questionItem: {
                            question: {
                                choiceQuestion: {
                                    type: "DROP_DOWN",
                                    options: ["a router", "a firewall", "a web server", "a DSL modem"].map((e) => ({
                                        value: e,
                                    })),
                                },
                            },
                        },
                    }, location: { index: 4 },
                },
            },
            {
                "createItem": {
                    item: {
                        title: "6. Refer to the exhibit. Match the packets with their destination IP address to the exiting interfaces on the router. (Not all targets are used.)",
                        questionGroupItem: {
                            grid: {
                                columns: {
                                    type: "RADIO",
                                    options: [
                                        { value: "FE0/0" },
                                        { value: "FE0/1" },
                                        { value: "FE1/0" },
                                        { value: "FE1/1" },
                                        { value: "Serial0/0/0" },
                                        { value: "The packet is dropped" },]
                                }
                            }, questions: [
                                { rowQuestion: { title: "172.17.10.5" } },
                                { rowQuestion: { title: "172.17.12.10" } },
                                { rowQuestion: { title: "172.17.14.8" } },
                                { rowQuestion: { title: "172.17.8.20" } },
                                { rowQuestion: { title: "172.17.6.15" } },],
                            image: { altText: "sample", sourceUri: 'https://shorturl.at/noUX9' },
                        }
                    }, location: { index: 5 }
                }
            }

        ]
    };

    const createResponse = await forms.forms.create({
        requestBody: newForm,
    });
    console.log(createResponse.data);
    console.log('New formId was: ' + createResponse.data.formId);
    // ทำการอัพเดท
    const res = await forms.forms.batchUpdate({
        formId: createResponse.data.formId,
        requestBody: update,
    });
    console.log(res.data);
    return res.data;
} if (module === require.main) {
    runSample().catch(console.error);
}
module.exports = runSample;
