const json = {
 "surveyId": "4083b10a-6387-4dae-87c3-01b50053ee5b",
 "surveyPostId": "9203765a-1ebe-45c3-9c76-af26dae00de9",
 "surveyShowDataSaving": true,
 "title": "Round 2 of Delphi Survey on the Quality Model for Review Report",
  "completedHtmlOnCondition": [
    {
      "html": "Thank you"
    },
    {
      "expression": "{pg2q1} = 0",
      "html": "I hope you come back later."
    }
  ],
  "pages": [
    {
      "name": "pg1",
      "elements": [
        {
          "type": "text",
          "name": "pg1auth1",
          "title": "Please, enter the authentication key.",
          "description": "The key is in the invitation email for this survey.",
          "hideNumber": true,
          "isRequired": true,
          "requiredErrorText": "Authentication error: Incorrect key!",
          "validators": [
            {
              "type": "regex",
              "text": "Authentication error: Incorrect key!",
              "regex": "(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
            }
          ],
          "inputType": "password",
          "maxLength": 8
        }
      ]
    },
    {
      "name": "pg2",
      "title": "Instructions for Panelists",
      "elements": [
        {
          "type": "panel",
          "name": "pg2pn1",
          "elements": [
            {
              "type": "image",
              "name": "question3",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=b5f19ed7-bcff-43a7-8a5b-a5ba41da180b",
              "imageFit": "fill",
              "imageHeight": "auto",
              "imageWidth": "100%"
            }
          ]
        },
        {
          "type": "panel",
          "name": "pg2pn2",
          "elements": [
            {
              "type": "image",
              "name": "question1",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=0d073c56-d2a5-4cff-8e73-511da8a90f5b",
              "imageHeight": "auto",
              "imageWidth": "100%"
            },
            {
              "type": "html",
              "name": "question6",
              "html": "<p style=\"text-align: center; font-weight: bold; font-size: 20px;\">To see the full descriptive statistics for Round 1, click <a href=\"https://drive.google.com/file/d/19oaxmh0mSRsf-OVjWYJ9yQMN66QtlaAP/view?usp=drive_link\" target=\"_blank\">here</a>.</p>"
            }
          ]
        },
        {
          "type": "panel",
          "name": "pg2pn3",
          "elements": [
            {
              "type": "image",
              "name": "question2",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=88b51e07-09e7-4ec4-be65-314fdb34f400",
              "imageHeight": "auto",
              "imageWidth": "100%"
            }
          ]
        },
        {
          "type": "panel",
          "name": "pg2pn4",
          "elements": [
            {
              "type": "image",
              "name": "question7",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=547bf983-af1e-40b1-9886-afe8e0ffecb2",
              "imageHeight": "auto",
              "imageWidth": "100%"
            },
            {
              "type": "html",
              "name": "question8",
              "html": "<p style=\"text-align: center; font-weight: bold; font-size: 20px;\">\n    Click <a href=\"https://drive.google.com/file/d/10WmHco1ftJ59IQ9vDp-pwMqyXyoROAIy/view?usp=drive_link\" target=\"_blank\" style=\"font-weight: bold;\">here</a> to see details for each statement.\n</p>"
            }
          ]
        },
        {
          "type": "panel",
          "name": "pg2pn5",
          "elements": [
            {
              "type": "image",
              "name": "question4",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=e385f0d8-71a9-4b04-9fa4-3768f26127fd",
              "imageHeight": "auto",
              "imageWidth": "100%"
            }
          ]
        },
        {
          "type": "panel",
          "name": "pg2pn6",
          "elements": [
            {
              "type": "image",
              "name": "question5",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=01322fe1-2f2d-4c1d-a948-8a346bf9e4f9",
              "imageHeight": "auto",
              "imageWidth": "100%"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "pg2q1",
          "title": "Agreement, consent Under the GDPR:",
          "description": "\nAll recorded information will be strictly confidential and maintained following the General Data Protection Regulation (Regulation (EU) 2016/679) (GDPR), the Data Protection Act 2018, and will be used only by researchers working on the team of research. \n\nThe collected data will only be published with the guarantee of anonymity. \n\nBy clicking on 'Yes' below, you are indicating that you are at least 18 years old, have read and understood this consent form and agree to participate in this research study.\n\nI agree to participate in this Delphi study:",
          "hideNumber": true,
          "isRequired": true,
          "choices": [
            {
              "value": "0",
              "text": "No"
            },
            {
              "value": "1",
              "text": "Yes"
            }
          ]
        }
      ]
    },
    {
      "name": "pg4",
      "elements": [
        {
          "type": "html",
          "name": "pg4html1",
          "html": "This section is related to the Helpfulness dimension."
        },
        {
          "type": "boolean",
          "name": "pg4q1",
          "title": "Click here to take a look at all the dimension definitions.",
          "hideNumber": true,
          "defaultValue": "false"
        },
        {
          "type": "html",
          "name": "pg4html2",
          "visible": false,
          "visibleIf": "{pg4q1} = true",
          "html": "<p><b>Helpfulness:</b> This characteristic represents the ability of the review to support the editor's decision-making and to provide the authors with constructive feedback that will improve the manuscript. Constructive feedback is characterized by feeding forward with suggestions for direction and improvement. The constructiveness of how a critique is delivered will facilitate authors’ abilities to understand the information to improve the quality of their manuscripts.</p>\n\n<p><b>Specificity:</b> The criticisms should be specific, not vague. The review should have specific comments and suggest the precise changes that would improve the theory and analyses as well as provide actionable items for the author’s revisions. The reviewer must indicate what the problems are and exactly how they could or should be addressed. It is expected the reviewer give examples, references or whatever specific suggestions for analysis, writing, formatting, or summarizing the information to enhance the manuscript.</p>\n\n<p><b>Thoroughness:</b> The review is thorough when written in detail, covering all the necessary manuscript components. The editor's decision cannot be based on reviewers' vague judgment. The authors also need a detailed comment covering all the different aspects of the manuscript. The thorough review is usually of substantive length and includes meaningful analyses, leading to an in-depth review report.</p>\n\n<p><b>Fairness:</b> The comments should be expressed in a fair and balanced approach. The comments are fair when the manuscript is judged solely based on its scientific merit. It means that the review is unbiased and impartial, that is, it is free of personal or professional preferences. The comments should contain only comments on the manuscript consistent with scientific ideals. Additionally, the reviewer's comments should provide balanced critiques presenting the study's pros and cons or strengths and weaknesses. It is expected that the reviewer describes inadequacies that must be addressed but also highlights identiﬁed strengths of the manuscript to maintain a good balance between positive and negative comments.</p>\n\n<p><b>Readability:</b> All the information from the review should be easily comprehended without ambiguity. The report should be well organized with structure and logical flow to easier the editor and author analysis and that allows them to best follow the points. The well-structured comments should refer to the chapters, sections, headings, and paragraphs, where the comments are directed. Also, it is expected to use some point-by-point structure in comments, through numbering, bullet, or any other structure that shows the organization of the review.</p>\n\n<p><b>Courteousness:</b> The review text should be expressed in a courteous tone.  The comments should be polite and respectful. The review report is communication between peers within an ethical and professional process. Therefore, the report's tone should reflect respect for the colleagues and their work. A reviewer should always be courteous, not offensive, and constructive.</p>\n\n<p><b>Consistency:</b> It is important the consistency in what the reviewer says to the authors and the editor. The information presented in the review should be consistent between comments to the editor and comments to the author. Also, reviewers must ensure that what is written in the comments is congruent with the ultimate recommendation to accept, revise, or reject the manuscript.</p>\n\n<p><b>Relevance:</b> The referee should evaluate the goal of the work both for its validity and its significance. The comments should indicate the importance of the study and the potential impact of the study for publishing. A good review discusses the importance of a research question and its originality and its relevance. The review places the manuscript in the proper perspective. Such critiques indicate the state of knowledge in the ﬁeld being studied and how the manuscript contributes to the knowledge in the area.</p>"
        },
        {
          "type": "matrixdropdown",
          "name": "pg4q2_r1",
          "indent": 3,
          "title": "Please rate each item according to its importance for comments to the editor and comments to the author. The items are categorized into Helpfulness dimension. You can change the dimension for these items if you consider another would be more appropriate. At the end of the form, there is an open field for any contributions you wish to make, such as modifying the text of the items or adding new ones.",
          "hideNumber": true,
          "defaultValue": {
            "r1": {
              "c1": "1",
              "c2": "5",
              "c3": "1"
            }
          },
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "readOnly": true,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "1",
                  "text": "Consensus: included in the model"
                }
              ],
              "storeOthersAsComment": true
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 1,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r1",
              "text": "1. Provides constructive feedback, with suggestions for manuscript improvement."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg4q2_r5",
          "indent": 3,
          "title": " ",
          "hideNumber": true,
          "defaultValue": {
            "r5": {
              "c1": "5",
              "c2": "5",
              "c3": "1"
            }
          },
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 1,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r2",
              "text": "2. Summarizes the reviewer's interpretation of the study."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg4q2_r3",
          "indent": 3,
          "title": " ",
          "hideNumber": true,
          "defaultValue": {
            "r1": {
              "c1": "1",
              "c2": "5",
              "c3": "1"
            },
            "r3": {
              "c1": "1",
              "c2": "5",
              "c3": "1"
            }
          },
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "readOnly": true,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "1",
                  "text": "Consensus: included in the model"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 1,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r3",
              "text": "3. Provides additional comments that add value to the manuscript."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg4q2_r4",
          "indent": 3,
          "title": " ",
          "hideNumber": true,
          "defaultValue": {
            "r5": {
              "c1": "5",
              "c2": "5",
              "c3": "1"
            }
          },
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 1,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r4",
              "text": "4. Proposes a solution for each problem highlighted."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg4q2_r8",
          "indent": 3,
          "title": " ",
          "hideNumber": true,
          "defaultValue": {
            "r5": {
              "c1": "5",
              "c2": "1",
              "c3": "1"
            }
          },
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "readOnly": true,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "1",
                  "text": "Consensus: included in the model"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 1,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r5",
              "text": "5. Provides the recommendation regarding publication, whether the paper should be accepted, revised, or rejected."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg4q2_r12",
          "indent": 3,
          "title": " ",
          "hideNumber": true,
          "defaultValue": {
            "r5": {
              "c1": "5",
              "c2": "5",
              "c3": "1"
            }
          },
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 1,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r6",
              "text": "6. Highlights the amount of work required before the manuscript may be suitable for publication."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg4q2_r15",
          "indent": 3,
          "title": " ",
          "hideNumber": true,
          "defaultValue": {
            "r5": {
              "c1": "5",
              "c2": "1",
              "c3": "1"
            },
            "r7": {
              "c1": "5",
              "c2": "1",
              "c3": "1"
            }
          },
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "readOnly": true,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "1",
                  "text": "Consensus: included in the model"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 1,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r7",
              "text": "7. Identifies areas of the manuscript that the reviewer was unable to adequately assess and suggests other professionals who could be solicited (e.g., statistician)."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg4q2_r18",
          "indent": 3,
          "title": " ",
          "hideNumber": true,
          "defaultValue": {
            "r5": {
              "c1": "1",
              "c2": "5",
              "c3": "1"
            },
            "r8": {
              "c1": "1",
              "c2": "5",
              "c3": "1"
            }
          },
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "readOnly": true,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "1",
                  "text": "Consensus: excluded"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 1,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r8",
              "text": "8. Provides insight to the editor into your approach or engagement with the process."
            }
          ]
        },
        {
          "type": "comment",
          "name": "pg4q3",
          "title": "9. Feel free to suggest new items or changes to the dimension's definition.",
          "hideNumber": true
        }
      ]
    },
    {
      "name": "pg5",
      "elements": [
        {
          "type": "html",
          "name": "pg5html1",
          "html": "This section is related to the Specificity dimension."
        },
        {
          "type": "boolean",
          "name": "pg5q1",
          "title": "Click here to take a look at all the dimension definitions.",
          "hideNumber": true,
          "defaultValue": "false"
        },
        {
          "type": "html",
          "name": "pg5html2",
          "visible": false,
          "visibleIf": "{pg5q1} = true",
          "html": "<p><b>Helpfulness:</b> This characteristic represents the ability of the review to support the editor's decision-making and to provide the authors with constructive feedback that will improve the manuscript. Constructive feedback is characterized by feeding forward with suggestions for direction and improvement. The constructiveness of how a critique is delivered will facilitate authors’ abilities to understand the information to improve the quality of their manuscripts.</p>\n\n<p><b>Specificity:</b> The criticisms should be specific, not vague. The review should have specific comments and suggest the precise changes that would improve the theory and analyses as well as provide actionable items for the author’s revisions. The reviewer must indicate what the problems are and exactly how they could or should be addressed. It is expected the reviewer give examples, references or whatever specific suggestions for analysis, writing, formatting, or summarizing the information to enhance the manuscript.</p>\n\n<p><b>Thoroughness:</b> The review is thorough when written in detail, covering all the necessary manuscript components. The editor's decision cannot be based on reviewers' vague judgment. The authors also need a detailed comment covering all the different aspects of the manuscript. The thorough review is usually of substantive length and includes meaningful analyses, leading to an in-depth review report.</p>\n\n<p><b>Fairness:</b> The comments should be expressed in a fair and balanced approach. The comments are fair when the manuscript is judged solely based on its scientific merit. It means that the review is unbiased and impartial, that is, it is free of personal or professional preferences. The comments should contain only comments on the manuscript consistent with scientific ideals. Additionally, the reviewer's comments should provide balanced critiques presenting the study's pros and cons or strengths and weaknesses. It is expected that the reviewer describes inadequacies that must be addressed but also highlights identiﬁed strengths of the manuscript to maintain a good balance between positive and negative comments.</p>\n\n<p><b>Readability:</b> All the information from the review should be easily comprehended without ambiguity. The report should be well organized with structure and logical flow to easier the editor and author analysis and that allows them to best follow the points. The well-structured comments should refer to the chapters, sections, headings, and paragraphs, where the comments are directed. Also, it is expected to use some point-by-point structure in comments, through numbering, bullet, or any other structure that shows the organization of the review.</p>\n\n<p><b>Courteousness:</b> The review text should be expressed in a courteous tone.  The comments should be polite and respectful. The review report is communication between peers within an ethical and professional process. Therefore, the report's tone should reflect respect for the colleagues and their work. A reviewer should always be courteous, not offensive, and constructive.</p>\n\n<p><b>Consistency:</b> It is important the consistency in what the reviewer says to the authors and the editor. The information presented in the review should be consistent between comments to the editor and comments to the author. Also, reviewers must ensure that what is written in the comments is congruent with the ultimate recommendation to accept, revise, or reject the manuscript.</p>\n\n<p><b>Relevance:</b> The referee should evaluate the goal of the work both for its validity and its significance. The comments should indicate the importance of the study and the potential impact of the study for publishing. A good review discusses the importance of a research question and its originality and its relevance. The review places the manuscript in the proper perspective. Such critiques indicate the state of knowledge in the ﬁeld being studied and how the manuscript contributes to the knowledge in the area.</p>"
        },
        {
          "type": "matrixdropdown",
          "name": "pg5q2_r1",
          "title": "Please rate each item according to its importance for comments to the editor and comments to the author. The items are categorized into Specificity dimension. You can change the dimension for these items if you consider another would be more appropriate. At the end of the form, there is an open field for any contributions you wish to make, such as modifying the text of the items or adding new ones.",
          "hideNumber": true,
          "defaultValue": {
            "r1": {
              "c1": "1",
              "c2": "5",
              "c3": "2"
            }
          },
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "readOnly": true,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "1",
                  "text": "Consensus: included in the model"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 2,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r1",
              "text": "1. Makes specific suggestions for manuscript improvements."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg5q2_r2",
          "title": " ",
          "hideNumber": true,
          "defaultValue": {
            "r2": {
              "c1": "1",
              "c2": "5",
              "c3": "2"
            }
          },
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "readOnly": true,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "1",
                  "text": "Consensus: included in the model"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 2,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r2",
              "text": "2. Provides specific comments with a clear explanation of the criticisms and how to resolve them."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg5q2_r3",
          "title": " ",
          "hideNumber": true,
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 2,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r3",
              "text": "3. Provides references and citations from the literature to support the comments."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg5q2_r4",
          "title": " ",
          "hideNumber": true,
          "defaultValue": {
            "r3": {
              "c1": "1",
              "c2": "5",
              "c3": "2"
            }
          },
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "readOnly": true,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "1",
                  "text": "Consensus: included in the model"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 2,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r4",
              "text": "4. Provides comments detailed enough to assist authors in making necessary modifications."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg5q2_r5",
          "title": " ",
          "hideNumber": true,
          "defaultValue": {
            "r4": {
              "c1": "5",
              "c2": "5",
              "c3": "2"
            }
          },
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 2,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r5",
              "text": "5. Provides examples to highlight the issues."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg4q2_r16",
          "title": " ",
          "hideNumber": true,
          "defaultValue": {
            "r4": {
              "c1": "5",
              "c2": "5",
              "c3": "2"
            }
          },
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 2,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r6",
              "text": "6. Suggests a change to a research type that is more appropriate for the content."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg4q2_r2",
          "title": " ",
          "hideNumber": true,
          "defaultValue": {
            "r4": {
              "c1": "5",
              "c2": "5",
              "c3": "2"
            }
          },
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 2,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r7",
              "text": "7. Provides suggestions for alternative ways to analyze the data."
            }
          ]
        },
        {
          "type": "comment",
          "name": "pg5q3",
          "title": "8. Feel free to suggest new items or changes to the dimension's definition.",
          "hideNumber": true
        }
      ]
    },
    {
      "name": "pg6",
      "elements": [
        {
          "type": "html",
          "name": "pg6html1",
          "html": "This section is related to the Fairness dimension."
        },
        {
          "type": "boolean",
          "name": "pg6q1",
          "title": "Click here to take a look at all the dimension definitions.",
          "hideNumber": true,
          "defaultValue": "false"
        },
        {
          "type": "html",
          "name": "pg6html2",
          "visible": false,
          "visibleIf": "{pg6q1} = true",
          "html": "<p><b>Helpfulness:</b> This characteristic represents the ability of the review to support the editor's decision-making and to provide the authors with constructive feedback that will improve the manuscript. Constructive feedback is characterized by feeding forward with suggestions for direction and improvement. The constructiveness of how a critique is delivered will facilitate authors’ abilities to understand the information to improve the quality of their manuscripts.</p>\n\n<p><b>Specificity:</b> The criticisms should be specific, not vague. The review should have specific comments and suggest the precise changes that would improve the theory and analyses as well as provide actionable items for the author’s revisions. The reviewer must indicate what the problems are and exactly how they could or should be addressed. It is expected the reviewer give examples, references or whatever specific suggestions for analysis, writing, formatting, or summarizing the information to enhance the manuscript.</p>\n\n<p><b>Thoroughness:</b> The review is thorough when written in detail, covering all the necessary manuscript components. The editor's decision cannot be based on reviewers' vague judgment. The authors also need a detailed comment covering all the different aspects of the manuscript. The thorough review is usually of substantive length and includes meaningful analyses, leading to an in-depth review report.</p>\n\n<p><b>Fairness:</b> The comments should be expressed in a fair and balanced approach. The comments are fair when the manuscript is judged solely based on its scientific merit. It means that the review is unbiased and impartial, that is, it is free of personal or professional preferences. The comments should contain only comments on the manuscript consistent with scientific ideals. Additionally, the reviewer's comments should provide balanced critiques presenting the study's pros and cons or strengths and weaknesses. It is expected that the reviewer describes inadequacies that must be addressed but also highlights identiﬁed strengths of the manuscript to maintain a good balance between positive and negative comments.</p>\n\n<p><b>Readability:</b> All the information from the review should be easily comprehended without ambiguity. The report should be well organized with structure and logical flow to easier the editor and author analysis and that allows them to best follow the points. The well-structured comments should refer to the chapters, sections, headings, and paragraphs, where the comments are directed. Also, it is expected to use some point-by-point structure in comments, through numbering, bullet, or any other structure that shows the organization of the review.</p>\n\n<p><b>Courteousness:</b> The review text should be expressed in a courteous tone.  The comments should be polite and respectful. The review report is communication between peers within an ethical and professional process. Therefore, the report's tone should reflect respect for the colleagues and their work. A reviewer should always be courteous, not offensive, and constructive.</p>\n\n<p><b>Consistency:</b> It is important the consistency in what the reviewer says to the authors and the editor. The information presented in the review should be consistent between comments to the editor and comments to the author. Also, reviewers must ensure that what is written in the comments is congruent with the ultimate recommendation to accept, revise, or reject the manuscript.</p>\n\n<p><b>Relevance:</b> The referee should evaluate the goal of the work both for its validity and its significance. The comments should indicate the importance of the study and the potential impact of the study for publishing. A good review discusses the importance of a research question and its originality and its relevance. The review places the manuscript in the proper perspective. Such critiques indicate the state of knowledge in the ﬁeld being studied and how the manuscript contributes to the knowledge in the area.</p>"
        },
        {
          "type": "matrixdropdown",
          "name": "pg6q2_r3",
          "title": "Please rate each item according to its importance for comments to the editor and comments to the author. The items are categorized into Fairness dimension. You can change the dimension for these items if you consider another would be more appropriate. At the end of the form, there is an open field for any contributions you wish to make, such as modifying the text of the items or adding new ones.",
          "hideNumber": true,
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 3,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r1",
              "text": "1. Provides general comments, both favorable and negative."
            }
          ]
        },
        {
          "type": "comment",
          "name": "pg6q3",
          "title": "2. Feel free to suggest new items or changes to the dimension's definition.",
          "hideNumber": true
        }
      ]
    },
    {
      "name": "pg7",
      "elements": [
        {
          "type": "html",
          "name": "pg7html1",
          "html": "This section is related to the Thoroughness dimension."
        },
        {
          "type": "boolean",
          "name": "pg7q1",
          "title": "Click here to take a look at all the dimension definitions.",
          "hideNumber": true,
          "defaultValue": "false"
        },
        {
          "type": "html",
          "name": "pg7html2",
          "visible": false,
          "visibleIf": "{pg7q1} = true",
          "html": "<p><b>Helpfulness:</b> This characteristic represents the ability of the review to support the editor's decision-making and to provide the authors with constructive feedback that will improve the manuscript. Constructive feedback is characterized by feeding forward with suggestions for direction and improvement. The constructiveness of how a critique is delivered will facilitate authors’ abilities to understand the information to improve the quality of their manuscripts.</p>\n\n<p><b>Specificity:</b> The criticisms should be specific, not vague. The review should have specific comments and suggest the precise changes that would improve the theory and analyses as well as provide actionable items for the author’s revisions. The reviewer must indicate what the problems are and exactly how they could or should be addressed. It is expected the reviewer give examples, references or whatever specific suggestions for analysis, writing, formatting, or summarizing the information to enhance the manuscript.</p>\n\n<p><b>Thoroughness:</b> The review is thorough when written in detail, covering all the necessary manuscript components. The editor's decision cannot be based on reviewers' vague judgment. The authors also need a detailed comment covering all the different aspects of the manuscript. The thorough review is usually of substantive length and includes meaningful analyses, leading to an in-depth review report.</p>\n\n<p><b>Fairness:</b> The comments should be expressed in a fair and balanced approach. The comments are fair when the manuscript is judged solely based on its scientific merit. It means that the review is unbiased and impartial, that is, it is free of personal or professional preferences. The comments should contain only comments on the manuscript consistent with scientific ideals. Additionally, the reviewer's comments should provide balanced critiques presenting the study's pros and cons or strengths and weaknesses. It is expected that the reviewer describes inadequacies that must be addressed but also highlights identiﬁed strengths of the manuscript to maintain a good balance between positive and negative comments.</p>\n\n<p><b>Readability:</b> All the information from the review should be easily comprehended without ambiguity. The report should be well organized with structure and logical flow to easier the editor and author analysis and that allows them to best follow the points. The well-structured comments should refer to the chapters, sections, headings, and paragraphs, where the comments are directed. Also, it is expected to use some point-by-point structure in comments, through numbering, bullet, or any other structure that shows the organization of the review.</p>\n\n<p><b>Courteousness:</b> The review text should be expressed in a courteous tone.  The comments should be polite and respectful. The review report is communication between peers within an ethical and professional process. Therefore, the report's tone should reflect respect for the colleagues and their work. A reviewer should always be courteous, not offensive, and constructive.</p>\n\n<p><b>Consistency:</b> It is important the consistency in what the reviewer says to the authors and the editor. The information presented in the review should be consistent between comments to the editor and comments to the author. Also, reviewers must ensure that what is written in the comments is congruent with the ultimate recommendation to accept, revise, or reject the manuscript.</p>\n\n<p><b>Relevance:</b> The referee should evaluate the goal of the work both for its validity and its significance. The comments should indicate the importance of the study and the potential impact of the study for publishing. A good review discusses the importance of a research question and its originality and its relevance. The review places the manuscript in the proper perspective. Such critiques indicate the state of knowledge in the ﬁeld being studied and how the manuscript contributes to the knowledge in the area.</p>"
        },
        {
          "type": "matrixdropdown",
          "name": "pg7q2_r1",
          "title": "Please rate each item according to its importance for comments to the editor and comments to the author. The items are categorized into Thoroughness dimension. You can change the dimension for these items if you consider another would be more appropriate. At the end of the form, there is an open field for any contributions you wish to make, such as modifying the text of the items or adding new ones.",
          "hideNumber": true,
          "defaultValue": {
            "r1": {
              "c1": "1",
              "c2": "5",
              "c3": "4"
            }
          },
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "readOnly": true,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "1",
                  "text": "Consensus: included in the model"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 4,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r1",
              "text": "1. Provides a review with good length and sufficient details to be useful to both the editor and the author."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg6q2_r2",
          "title": " ",
          "hideNumber": true,
          "defaultValue": {
            "r2": {
              "c1": "1",
              "c2": "5",
              "c3": "4"
            }
          },
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "readOnly": true,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "1",
                  "text": "Consensus: included in the model"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 4,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r2",
              "text": "2. Identifies both major and minor concerns."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg7q2_r2",
          "title": " ",
          "hideNumber": true,
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 4,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r3",
              "text": "3. Provides a detailed analysis of the article sections, as well as tables and figures."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg7q2_r4",
          "title": " ",
          "hideNumber": true,
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 4,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r4",
              "text": "4. Evaluates the organization, flow, and readability of the study."
            }
          ]
        },
        {
          "type": "comment",
          "name": "pg7q3",
          "title": "5. Feel free to suggest new items or changes to the dimension's definition.",
          "hideNumber": true
        }
      ]
    },
    {
      "name": "pg8",
      "elements": [
        {
          "type": "html",
          "name": "pg8html1",
          "html": "This section is related to the Courteousness dimension."
        },
        {
          "type": "boolean",
          "name": "pg8q1",
          "title": "Click here to take a look at all the dimension definitions.",
          "hideNumber": true,
          "defaultValue": "false"
        },
        {
          "type": "html",
          "name": "pg8html2",
          "visible": false,
          "visibleIf": "{pg8q1} = true",
          "html": "<p><b>Helpfulness:</b> This characteristic represents the ability of the review to support the editor's decision-making and to provide the authors with constructive feedback that will improve the manuscript. Constructive feedback is characterized by feeding forward with suggestions for direction and improvement. The constructiveness of how a critique is delivered will facilitate authors’ abilities to understand the information to improve the quality of their manuscripts.</p>\n\n<p><b>Specificity:</b> The criticisms should be specific, not vague. The review should have specific comments and suggest the precise changes that would improve the theory and analyses as well as provide actionable items for the author’s revisions. The reviewer must indicate what the problems are and exactly how they could or should be addressed. It is expected the reviewer give examples, references or whatever specific suggestions for analysis, writing, formatting, or summarizing the information to enhance the manuscript.</p>\n\n<p><b>Thoroughness:</b> The review is thorough when written in detail, covering all the necessary manuscript components. The editor's decision cannot be based on reviewers' vague judgment. The authors also need a detailed comment covering all the different aspects of the manuscript. The thorough review is usually of substantive length and includes meaningful analyses, leading to an in-depth review report.</p>\n\n<p><b>Fairness:</b> The comments should be expressed in a fair and balanced approach. The comments are fair when the manuscript is judged solely based on its scientific merit. It means that the review is unbiased and impartial, that is, it is free of personal or professional preferences. The comments should contain only comments on the manuscript consistent with scientific ideals. Additionally, the reviewer's comments should provide balanced critiques presenting the study's pros and cons or strengths and weaknesses. It is expected that the reviewer describes inadequacies that must be addressed but also highlights identiﬁed strengths of the manuscript to maintain a good balance between positive and negative comments.</p>\n\n<p><b>Readability:</b> All the information from the review should be easily comprehended without ambiguity. The report should be well organized with structure and logical flow to easier the editor and author analysis and that allows them to best follow the points. The well-structured comments should refer to the chapters, sections, headings, and paragraphs, where the comments are directed. Also, it is expected to use some point-by-point structure in comments, through numbering, bullet, or any other structure that shows the organization of the review.</p>\n\n<p><b>Courteousness:</b> The review text should be expressed in a courteous tone.  The comments should be polite and respectful. The review report is communication between peers within an ethical and professional process. Therefore, the report's tone should reflect respect for the colleagues and their work. A reviewer should always be courteous, not offensive, and constructive.</p>\n\n<p><b>Consistency:</b> It is important the consistency in what the reviewer says to the authors and the editor. The information presented in the review should be consistent between comments to the editor and comments to the author. Also, reviewers must ensure that what is written in the comments is congruent with the ultimate recommendation to accept, revise, or reject the manuscript.</p>\n\n<p><b>Relevance:</b> The referee should evaluate the goal of the work both for its validity and its significance. The comments should indicate the importance of the study and the potential impact of the study for publishing. A good review discusses the importance of a research question and its originality and its relevance. The review places the manuscript in the proper perspective. Such critiques indicate the state of knowledge in the ﬁeld being studied and how the manuscript contributes to the knowledge in the area.</p>"
        },
        {
          "type": "matrixdropdown",
          "name": "pg8q2_r1",
          "title": "Please rate each item according to its importance for comments to the editor and comments to the author. The items are categorized into Courteousness dimension. You can change the dimension for these items if you consider another would be more appropriate. At the end of the form, there is an open field for any contributions you wish to make, such as modifying the text of the items or adding new ones.",
          "hideNumber": true,
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r1",
              "text": "1. Is written in a positive tone."
            }
          ]
        },
        {
          "type": "comment",
          "name": "pg8q3",
          "title": "2. Feel free to suggest new items or changes to the dimension's definition.",
          "hideNumber": true
        }
      ]
    },
    {
      "name": "pg9",
      "elements": [
        {
          "type": "html",
          "name": "pg9html1",
          "html": "This section is related to the Readability dimension."
        },
        {
          "type": "boolean",
          "name": "pg9q1",
          "title": "Click here to take a look at all the dimension definitions.",
          "hideNumber": true,
          "defaultValue": "false"
        },
        {
          "type": "html",
          "name": "pg9html2",
          "visible": false,
          "visibleIf": "{pg9q1} = true",
          "html": "<p><b>Helpfulness:</b> This characteristic represents the ability of the review to support the editor's decision-making and to provide the authors with constructive feedback that will improve the manuscript. Constructive feedback is characterized by feeding forward with suggestions for direction and improvement. The constructiveness of how a critique is delivered will facilitate authors’ abilities to understand the information to improve the quality of their manuscripts.</p>\n\n<p><b>Specificity:</b> The criticisms should be specific, not vague. The review should have specific comments and suggest the precise changes that would improve the theory and analyses as well as provide actionable items for the author’s revisions. The reviewer must indicate what the problems are and exactly how they could or should be addressed. It is expected the reviewer give examples, references or whatever specific suggestions for analysis, writing, formatting, or summarizing the information to enhance the manuscript.</p>\n\n<p><b>Thoroughness:</b> The review is thorough when written in detail, covering all the necessary manuscript components. The editor's decision cannot be based on reviewers' vague judgment. The authors also need a detailed comment covering all the different aspects of the manuscript. The thorough review is usually of substantive length and includes meaningful analyses, leading to an in-depth review report.</p>\n\n<p><b>Fairness:</b> The comments should be expressed in a fair and balanced approach. The comments are fair when the manuscript is judged solely based on its scientific merit. It means that the review is unbiased and impartial, that is, it is free of personal or professional preferences. The comments should contain only comments on the manuscript consistent with scientific ideals. Additionally, the reviewer's comments should provide balanced critiques presenting the study's pros and cons or strengths and weaknesses. It is expected that the reviewer describes inadequacies that must be addressed but also highlights identiﬁed strengths of the manuscript to maintain a good balance between positive and negative comments.</p>\n\n<p><b>Readability:</b> All the information from the review should be easily comprehended without ambiguity. The report should be well organized with structure and logical flow to easier the editor and author analysis and that allows them to best follow the points. The well-structured comments should refer to the chapters, sections, headings, and paragraphs, where the comments are directed. Also, it is expected to use some point-by-point structure in comments, through numbering, bullet, or any other structure that shows the organization of the review.</p>\n\n<p><b>Courteousness:</b> The review text should be expressed in a courteous tone.  The comments should be polite and respectful. The review report is communication between peers within an ethical and professional process. Therefore, the report's tone should reflect respect for the colleagues and their work. A reviewer should always be courteous, not offensive, and constructive.</p>\n\n<p><b>Consistency:</b> It is important the consistency in what the reviewer says to the authors and the editor. The information presented in the review should be consistent between comments to the editor and comments to the author. Also, reviewers must ensure that what is written in the comments is congruent with the ultimate recommendation to accept, revise, or reject the manuscript.</p>\n\n<p><b>Relevance:</b> The referee should evaluate the goal of the work both for its validity and its significance. The comments should indicate the importance of the study and the potential impact of the study for publishing. A good review discusses the importance of a research question and its originality and its relevance. The review places the manuscript in the proper perspective. Such critiques indicate the state of knowledge in the ﬁeld being studied and how the manuscript contributes to the knowledge in the area.</p>"
        },
        {
          "type": "matrixdropdown",
          "name": "pg7q2_r3",
          "title": "Please rate each item according to its importance for comments to the editor and comments to the author. The items are categorized into Readability dimension. You can change the dimension for these items if you consider another would be more appropriate. At the end of the form, there is an open field for any contributions you wish to make, such as modifying the text of the items or adding new ones.",
          "hideNumber": true,
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 8,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r1",
              "text": "1. Provides notes on whether linguistic editing is needed or not."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg9q2_r2",
          "title": " ",
          "hideNumber": true,
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 8,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r2",
              "text": "2. Comments should start with a summary of the reviewer’s interpretation of the work."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg9q2_r3",
          "title": " ",
          "hideNumber": true,
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 8,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r3",
              "text": "3. Provides general comments and specific comments."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg9q2_r4",
          "title": " ",
          "hideNumber": true,
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 8,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r4",
              "text": "4. Provides comments in the order they occur in the manuscript, divided by section."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg9q2_r5",
          "title": " ",
          "hideNumber": true,
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 8,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r5",
              "text": "5. Provides numbered comments."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg9q2_r6",
          "title": " ",
          "hideNumber": true,
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 8,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r6",
              "text": "6. Provides comments organized from the most important to the least important."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg9q2_r7",
          "title": " ",
          "hideNumber": true,
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 8,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r7",
              "text": "7. Provides each new comment in a new paragraph."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg7q2_r5",
          "title": " ",
          "hideNumber": true,
          "defaultValue": {
            "r8": {
              "c1": "5",
              "c2": "5",
              "c3": "8"
            }
          },
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 8,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r8",
              "text": "8. Identifies language mistakes and typos."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg9q2_r9",
          "title": " ",
          "hideNumber": true,
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 8,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r9",
              "text": "9. Provides comments posed as clear suggestions or observations, instead of in the form of questions."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg9q2_r10",
          "title": " ",
          "hideNumber": true,
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 8,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r10",
              "text": "10. Provides comments organized by theme."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg9q2_r11",
          "title": " ",
          "hideNumber": true,
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 8,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r11",
              "text": "11. Provides comments in the order of the manuscript pages."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg9q2_r12",
          "title": " ",
          "hideNumber": true,
          "defaultValue": {
            "r12": {
              "c1": "5",
              "c2": "1",
              "c3": "8"
            }
          },
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "readOnly": true,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "1",
                  "text": "Consensus: excluded"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 8,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r12",
              "text": "12. Reviews should not address the author directly, not as “you”. The phrases should be replaced by “the authors” or “the paper”."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg4q2_r20",
          "title": " ",
          "hideNumber": true,
          "defaultValue": {
            "r13": {
              "c1": "1",
              "c2": "5",
              "c3": "8"
            }
          },
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "readOnly": true,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "1",
                  "text": "Consensus: included in the model"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 8,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r13",
              "text": "13. Provides notes if major grammatical errors make the manuscript difficult to read."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg9q2_r14",
          "title": " ",
          "hideNumber": true,
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 8,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r14",
              "text": "14. Provides writing referring to page numbers and line numbers in the manuscript."
            }
          ]
        },
        {
          "type": "comment",
          "name": "pg9q3",
          "title": "15. Feel free to suggest new items or changes to the dimension's definition.",
          "hideNumber": true
        }
      ]
    },
    {
      "name": "pg11",
      "elements": [
        {
          "type": "html",
          "name": "pg11html1",
          "html": "This section is related to the Relevance dimension."
        },
        {
          "type": "boolean",
          "name": "pg11q1",
          "title": "Click here to take a look at all the dimension definitions.",
          "hideNumber": true,
          "defaultValue": "false"
        },
        {
          "type": "html",
          "name": "pg11html2",
          "visible": false,
          "visibleIf": "{pg11q1} = true",
          "html": "<p><b>Helpfulness:</b> This characteristic represents the ability of the review to support the editor's decision-making and to provide the authors with constructive feedback that will improve the manuscript. Constructive feedback is characterized by feeding forward with suggestions for direction and improvement. The constructiveness of how a critique is delivered will facilitate authors’ abilities to understand the information to improve the quality of their manuscripts.</p>\n\n<p><b>Specificity:</b> The criticisms should be specific, not vague. The review should have specific comments and suggest the precise changes that would improve the theory and analyses as well as provide actionable items for the author’s revisions. The reviewer must indicate what the problems are and exactly how they could or should be addressed. It is expected the reviewer give examples, references or whatever specific suggestions for analysis, writing, formatting, or summarizing the information to enhance the manuscript.</p>\n\n<p><b>Thoroughness:</b> The review is thorough when written in detail, covering all the necessary manuscript components. The editor's decision cannot be based on reviewers' vague judgment. The authors also need a detailed comment covering all the different aspects of the manuscript. The thorough review is usually of substantive length and includes meaningful analyses, leading to an in-depth review report.</p>\n\n<p><b>Fairness:</b> The comments should be expressed in a fair and balanced approach. The comments are fair when the manuscript is judged solely based on its scientific merit. It means that the review is unbiased and impartial, that is, it is free of personal or professional preferences. The comments should contain only comments on the manuscript consistent with scientific ideals. Additionally, the reviewer's comments should provide balanced critiques presenting the study's pros and cons or strengths and weaknesses. It is expected that the reviewer describes inadequacies that must be addressed but also highlights identiﬁed strengths of the manuscript to maintain a good balance between positive and negative comments.</p>\n\n<p><b>Readability:</b> All the information from the review should be easily comprehended without ambiguity. The report should be well organized with structure and logical flow to easier the editor and author analysis and that allows them to best follow the points. The well-structured comments should refer to the chapters, sections, headings, and paragraphs, where the comments are directed. Also, it is expected to use some point-by-point structure in comments, through numbering, bullet, or any other structure that shows the organization of the review.</p>\n\n<p><b>Courteousness:</b> The review text should be expressed in a courteous tone.  The comments should be polite and respectful. The review report is communication between peers within an ethical and professional process. Therefore, the report's tone should reflect respect for the colleagues and their work. A reviewer should always be courteous, not offensive, and constructive.</p>\n\n<p><b>Consistency:</b> It is important the consistency in what the reviewer says to the authors and the editor. The information presented in the review should be consistent between comments to the editor and comments to the author. Also, reviewers must ensure that what is written in the comments is congruent with the ultimate recommendation to accept, revise, or reject the manuscript.</p>\n\n<p><b>Relevance:</b> The referee should evaluate the goal of the work both for its validity and its significance. The comments should indicate the importance of the study and the potential impact of the study for publishing. A good review discusses the importance of a research question and its originality and its relevance. The review places the manuscript in the proper perspective. Such critiques indicate the state of knowledge in the ﬁeld being studied and how the manuscript contributes to the knowledge in the area.</p>"
        },
        {
          "type": "matrixdropdown",
          "name": "pg11q2_r2",
          "title": "Please rate each item according to its importance for comments to the editor and comments to the author. The items are categorized into Relevance dimension. You can change the dimension for these items if you consider another would be more appropriate. At the end of the form, there is an open field for any contributions you wish to make, such as modifying the text of the items or adding new ones.",
          "hideNumber": true,
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 7,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r1",
              "text": "1. Includes statements related to the potential relevance of the work."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg11q2_r5",
          "title": " ",
          "hideNumber": true,
          "defaultValue": {
            "r2": {
              "c1": "5",
              "c2": "1",
              "c3": "7"
            }
          },
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "readOnly": true,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "1",
                  "text": "Consensus: included in the model"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 7,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r2",
              "text": "2. Summarizes the overall impression of the manuscript's validity and implications."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg4q2_r10",
          "title": " ",
          "hideNumber": true,
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 7,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r3",
              "text": "3. Establishes the appropriateness and priority of research for publication."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg4q2_r13",
          "title": " ",
          "hideNumber": true,
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 7,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r4",
              "text": "4. Indicates whether the topic is important for the journal and whether readers will find it interesting."
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "pg4q2_r17",
          "title": " ",
          "hideNumber": true,
          "verticalAlign": "top",
          "alternateRows": true,
          "columns": [
            {
              "name": "c1",
              "title": "Comment to Author",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c2",
              "title": "Comment to Editor",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 5,
              "choices": [
                {
                  "value": "5",
                  "text": "Essential"
                },
                {
                  "value": "4",
                  "text": "Important"
                },
                {
                  "value": "3",
                  "text": "Moderately Important"
                },
                {
                  "value": "2",
                  "text": "Slightly Important"
                },
                {
                  "value": "1",
                  "text": "Unimportant"
                },
                {
                  "value": "0",
                  "text": "No opinion"
                }
              ]
            },
            {
              "name": "c3",
              "title": "Change Dimension",
              "cellType": "radiogroup",
              "colCount": 1,
              "defaultValue": 7,
              "choices": [
                {
                  "value": "1",
                  "text": "Helpfulness"
                },
                {
                  "value": "2",
                  "text": "Specificity"
                },
                {
                  "value": "3",
                  "text": "Fairness"
                },
                {
                  "value": "4",
                  "text": "Thoroughness"
                },
                {
                  "value": "5",
                  "text": "Courteousness"
                },
                {
                  "value": "6",
                  "text": "Consistency"
                },
                {
                  "value": "7",
                  "text": "Relevance"
                },
                {
                  "value": "8",
                  "text": "Readability"
                }
              ]
            }
          ],
          "rows": [
            {
              "value": "r5",
              "text": "5. Describes how the study adds to practice and what it adds to the field."
            }
          ]
        },
        {
          "type": "comment",
          "name": "pg11q3",
          "title": "6. Feel free to suggest new items or changes to the dimension's definition.",
          "hideNumber": true
        }
      ]
    }
  ],
  "triggers": [
    {
      "type": "complete"
    },
    {
      "type": "complete",
      "expression": "{pg2q1} = 0"
    }
  ],
  "firstPageIsStarted": true
}

const surveyJson = {
  "surveyId": "7a91c415-b4c2-4f7b-9d2b-07a504502db4",
  "surveyPostId": "e79b2565-3792-4d48-ad0a-e0b7bc452d96"
}

function sendDataToServer(survey) {
    survey.sendResult('e79b2565-3792-4d48-ad0a-e0b7bc452d96');
};


