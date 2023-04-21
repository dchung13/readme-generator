// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseSection = '';
  if (license === 'MIT' ) {
    licenseSection = `Copyright <2023> 

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  }
  if (license === 'IPL_1.0' ) {
    licenseSection = `IBM Public License Version 1.0
    THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS IBM PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.
    
    1. DEFINITIONS
    "Contribution" means:
    
    in the case of International Business Machines Corporation ("IBM"), the Original Program, and
    in the case of each Contributor,
    changes to the Program, and
    additions to the Program;
    where such changes and/or additions to the Program originate from and are distributed by that particular Contributor. A Contribution 'originates' from a Contributor if it was added to the Program by such Contributor itself or anyone acting on such Contributor's behalf. Contributions do not include additions to the Program which: (i) are separate modules of software distributed in conjunction with the Program under their own license agreement, and (ii) are not derivative works of the Program.
    "Contributor" means IBM and any other entity that distributes the Program.
    
    "Licensed Patents " mean patent claims licensable by a Contributor which are necessarily infringed by the use or sale of its Contribution alone or when combined with the Program.
    
    "Original Program" means the original version of the software accompanying this Agreement as released by IBM, including source code, object code and documentation, if any.
    
    "Program" means the Original Program and Contributions.
    
    "Recipient" means anyone who receives the Program under this Agreement, including all Contributors.
    
    2. GRANT OF RIGHTS
    Subject to the terms of this Agreement, each Contributor hereby grants Recipient a non-exclusive, worldwide, royalty-free copyright license to reproduce, prepare derivative works of, publicly display, publicly perform, distribute and sublicense the Contribution of such Contributor, if any, and such derivative works, in source code and object code form.
    Subject to the terms of this Agreement, each Contributor hereby grants Recipient a non-exclusive, worldwide, royalty-free patent license under Licensed Patents to make, use, sell, offer to sell, import and otherwise transfer the Contribution of such Contributor, if any, in source code and object code form. This patent license shall apply to the combination of the Contribution and the Program if, at the time the Contribution is added by the Contributor, such addition of the Contribution causes such combination to be covered by the Licensed Patents. The patent license shall not apply to any other combinations which include the Contribution. No hardware per se is licensed hereunder.
    Recipient understands that although each Contributor grants the licenses to its Contributions set forth herein, no assurances are provided by any Contributor that the Program does not infringe the patent or other intellectual property rights of any other entity. Each Contributor disclaims any liability to Recipient for claims brought by any other entity based on infringement of intellectual property rights or otherwise. As a condition to exercising the rights and licenses granted hereunder, each Recipient hereby assumes sole responsibility to secure any other intellectual property rights needed, if any. For example, if a third party patent license is required to allow Recipient to distribute the Program, it is Recipient's responsibility to acquire that license before distributing the Program.
    Each Contributor represents that to its knowledge it has sufficient copyright rights in its Contribution, if any, to grant the copyright license set forth in this Agreement.
    3. REQUIREMENTS
    A Contributor may choose to distribute the Program in object code form under its own license agreement, provided that:
    
    it complies with the terms and conditions of this Agreement; and
    its license agreement:
    effectively disclaims on behalf of all Contributors all warranties and conditions, express and implied, including warranties or conditions of title and non-infringement, and implied warranties or conditions of merchantability and fitness for a particular purpose;
    effectively excludes on behalf of all Contributors all liability for damages, including direct, indirect, special, incidental and consequential damages, such as lost profits;
    states that any provisions which differ from this Agreement are offered by that Contributor alone and not by any other party; and
    states that source code for the Program is available from such Contributor, and informs licensees how to obtain it in a reasonable manner on or through a medium customarily used for software exchange.
    When the Program is made available in source code form:
    
    it must be made available under this Agreement; and
    a copy of this Agreement must be included with each copy of the Program.
    Each Contributor must include the following in a conspicuous location in the Program:
    
    Copyright (C) 1996, 1999 International Business Machines Corporation and others. All Rights Reserved.
    In addition, each Contributor must identify itself as the originator of its Contribution, if any, in a manner that reasonably allows subsequent Recipients to identify the originator of the Contribution.
    
    4. COMMERCIAL DISTRIBUTION
    Commercial distributors of software may accept certain responsibilities with respect to end users, business partners and the like. While this license is intended to facilitate the commercial use of the Program, the Contributor who includes the Program in a commercial product offering should do so in a manner which does not create potential liability for other Contributors. Therefore, if a Contributor includes the Program in a commercial product offering, such Contributor ("Commercial Contributor") hereby agrees to defend and indemnify every other Contributor ("Indemnified Contributor") against any losses, damages and costs (collectively "Losses") arising from claims, lawsuits and other legal actions brought by a third party against the Indemnified Contributor to the extent caused by the acts or omissions of such Commercial Contributor in connection with its distribution of the Program in a commercial product offering. The obligations in this section do not apply to any claims or Losses relating to any actual or alleged intellectual property infringement. In order to qualify, an Indemnified Contributor must: a) promptly notify the Commercial Contributor in writing of such claim, and b) allow the Commercial Contributor to control, and cooperate with the Commercial Contributor in, the defense and any related settlement negotiations. The Indemnified Contributor may participate in any such claim at its own expense.
    
    For example, a Contributor might include the Program in a commercial product offering, Product X. That Contributor is then a Commercial Contributor. If that Commercial Contributor then makes performance claims, or offers warranties related to Product X, those performance claims and warranties are such Commercial Contributor's responsibility alone. Under this section, the Commercial Contributor would have to defend claims against the other Contributors related to those performance claims and warranties, and if a court requires any other Contributor to pay any damages as a result, the Commercial Contributor must pay those damages.
    
    5. NO WARRANTY
    EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, THE PROGRAM IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES OR CONDITIONS OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Each Recipient is solely responsible for determining the appropriateness of using and distributing the Program and assumes all risks associated with its exercise of rights under this Agreement, including but not limited to the risks and costs of program errors, compliance with applicable laws, damage to or loss of data, programs or equipment, and unavailability or interruption of operations.
    
    6. DISCLAIMER OF LIABILITY
    EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, NEITHER RECIPIENT NOR ANY CONTRIBUTORS SHALL HAVE ANY LIABILITY FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING WITHOUT LIMITATION LOST PROFITS), HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OR DISTRIBUTION OF THE PROGRAM OR THE EXERCISE OF ANY RIGHTS GRANTED HEREUNDER, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
    
    7. GENERAL
    If any provision of this Agreement is invalid or unenforceable under applicable law, it shall not affect the validity or enforceability of the remainder of the terms of this Agreement, and without further action by the parties hereto, such provision shall be reformed to the minimum extent necessary to make such provision valid and enforceable.
    
    If Recipient institutes patent litigation against a Contributor with respect to a patent applicable to software (including a cross-claim or counterclaim in a lawsuit), then any patent licenses granted by that Contributor to such Recipient under this Agreement shall terminate as of the date such litigation is filed. In addition, if Recipient institutes patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Program itself (excluding combinations of the Program with other software or hardware) infringes such Recipient's patent(s), then such Recipient's rights granted under Section 2(b) shall terminate as of the date such litigation is filed.
    
    All Recipient's rights under this Agreement shall terminate if it fails to comply with any of the material terms or conditions of this Agreement and does not cure such failure in a reasonable period of time after becoming aware of such noncompliance. If all Recipient's rights under this Agreement terminate, Recipient agrees to cease use and distribution of the Program as soon as reasonably practicable. However, Recipient's obligations under this Agreement and any licenses granted by Recipient relating to the Program shall continue and survive.
    
    IBM may publish new versions (including revisions) of this Agreement from time to time. Each new version of the Agreement will be given a distinguishing version number. The Program (including Contributions) may always be distributed subject to the version of the Agreement under which it was received. In addition, after a new version of the Agreement is published, Contributor may elect to distribute the Program (including its Contributions) under the new version. No one other than IBM has the right to modify this Agreement. Except as expressly stated in Sections 2(a) and 2(b) above, Recipient receives no rights or licenses to the intellectual property of any Contributor under this Agreement, whether expressly, by implication, estoppel or otherwise. All rights in the Program not expressly granted under this Agreement are reserved.
    
    This Agreement is governed by the laws of the State of New York and the intellectual property laws of the United States of America. No party to this Agreement will bring a legal action under this Agreement more than one year after the cause of action arose. Each party waives its rights to a jury trial in any resulting litigation.`;
  }

  if (license === 'Hippocratic_3.0' ) {
    licenseSection = `HIPPOCRATIC LICENSE

    Version 3.0, October 2021
    
    [https://firstdonoharm.dev/version/3/0/core.md](https://firstdonoharm.dev/version/3/0/core.md)
    
    TERMS AND CONDITIONS
    
    TERMS AND CONDITIONS FOR USE, COPY, MODIFICATION, PREPARATION OF DERIVATIVE WORK, REPRODUCTION, AND DISTRIBUTION:
    
    1. DEFINITIONS:
    
    This section defines certain terms used throughout this license agreement.
    
    1.1. “License” means the terms and conditions, as stated herein, for use, copy, modification, preparation of derivative work, reproduction, and distribution of Software (as defined below).
    
    1.2. “Licensor” means the copyright and/or patent owner or entity authorized by the copyright and/or patent owner that is granting the License.
    
    1.3. “Licensee” means the individual or entity exercising permissions granted by this License, including the use, copy, modification, preparation of derivative work, reproduction, and distribution of Software (as defined below).
    
    1.4. “Software” means any copyrighted work, including but not limited to software code, authored by Licensor and made available under this License.
    
    1.5. “Supply Chain” means the sequence of processes involved in the production and/or distribution of a commodity, good, or service offered by the Licensee.
    
    1.6. “Supply Chain Impacted Party” or “Supply Chain Impacted Parties” means any person(s) directly impacted by any of Licensee’s Supply Chain, including the practices of all persons or entities within the Supply Chain prior to a good or service reaching the Licensee.
    
    1.7. “Duty of Care” is defined by its use in tort law, delict law, and/or similar bodies of law closely related to tort and/or delict law, including without limitation, a requirement to act with the watchfulness, attention, caution, and prudence that a reasonable person in the same or similar circumstances would use towards any Supply Chain Impacted Party.
    
    1.8. “Worker” is defined to include any and all permanent, temporary, and agency workers, as well as piece-rate, salaried, hourly paid, legal young (minors), part-time, night, and migrant workers.
    
    2. INTELLECTUAL PROPERTY GRANTS:
    
    This section identifies intellectual property rights granted to a Licensee.
    
    2.1. Grant of Copyright License: Subject to the terms and conditions of this License, Licensor hereby grants to Licensee a worldwide, non-exclusive, no-charge, royalty-free copyright license to use, copy, modify, prepare derivative work, reproduce, or distribute the Software, Licensor authored modified software, or other work derived from the Software.
    
    2.2. Grant of Patent License: Subject to the terms and conditions of this License, Licensor hereby grants Licensee a worldwide, non-exclusive, no-charge, royalty-free patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer Software.
    
    3. ETHICAL STANDARDS:
    
    This section lists conditions the Licensee must comply with in order to have rights under this License.
    
    The rights granted to the Licensee by this License are expressly made subject to the Licensee’s ongoing compliance with the following conditions:
    
    3.1. The Licensee SHALL NOT, whether directly or indirectly, through agents or assigns:
    
    3.1.1. Infringe upon any person’s right to life or security of person, engage in extrajudicial killings, or commit murder, without lawful cause (See Article 3, United Nations Universal Declaration of Human Rights; Article 6, International Covenant on Civil and Political Rights)
    
    3.1.2. Hold any person in slavery, servitude, or forced labor (See Article 4, United Nations Universal Declaration of Human Rights; Article 8, International Covenant on Civil and Political Rights);
    
    3.1.3. Contribute to the institution of slavery, slave trading, forced labor, or unlawful child labor (See Article 4, United Nations Universal Declaration of Human Rights; Article 8, International Covenant on Civil and Political Rights);
    
    3.1.4. Torture or subject any person to cruel, inhumane, or degrading treatment or punishment (See Article 5, United Nations Universal Declaration of Human Rights; Article 7, International Covenant on Civil and Political Rights);
    
    3.1.5. Discriminate on the basis of sex, gender, sexual orientation, race, ethnicity, nationality, religion, caste, age, medical disability or impairment, and/or any other like circumstances (See Article 7, United Nations Universal Declaration of Human Rights; Article 2, International Covenant on Economic, Social and Cultural Rights; Article 26, International Covenant on Civil and Political Rights);
    
    3.1.6. Prevent any person from exercising his/her/their right to seek an effective remedy by a competent court or national tribunal (including domestic judicial systems, international courts, arbitration bodies, and other adjudicating bodies) for actions violating the fundamental rights granted to him/her/them by applicable constitutions, applicable laws, or by this License (See Article 8, United Nations Universal Declaration of Human Rights; Articles 9 and 14, International Covenant on Civil and Political Rights);
    
    3.1.7. Subject any person to arbitrary arrest, detention, or exile (See Article 9, United Nations Universal Declaration of Human Rights; Article 9, International Covenant on Civil and Political Rights);
    
    3.1.8. Subject any person to arbitrary interference with a person’s privacy, family, home, or correspondence without the express written consent of the person (See Article 12, United Nations Universal Declaration of Human Rights; Article 17, International Covenant on Civil and Political Rights);
    
    3.1.9. Arbitrarily deprive any person of his/her/their property (See Article 17, United Nations Universal Declaration of Human Rights);
    
    3.1.10. Forcibly remove indigenous peoples from their lands or territories or take any action with the aim or effect of dispossessing indigenous peoples from their lands, territories, or resources, including without limitation the intellectual property or traditional knowledge of indigenous peoples, without the free, prior, and informed consent of indigenous peoples concerned (See Articles 8 and 10, United Nations Declaration on the Rights of Indigenous Peoples);
    
    3.1.11. Interfere with Workers' free exercise of the right to organize and associate (See Article 20, United Nations Universal Declaration of Human Rights; C087 - Freedom of Association and Protection of the Right to Organise Convention, 1948 (No. 87), International Labour Organization; Article 8, International Covenant on Economic, Social and Cultural Rights); and
    
    3.1.12. Harm the environment in a manner inconsistent with local, state, national, or international law.
    
    3.2. The Licensee SHALL:
    
    3.2.1. Provide equal pay for equal work where the performance of such work requires equal skill, effort, and responsibility, and which are performed under similar working conditions, except where such payment is made pursuant to:
    
    3.2.1.1. A seniority system;
    
    3.2.1.2. A merit system;
    
    3.2.1.3. A system which measures earnings by quantity or quality of production; or
    
    3.2.1.4. A differential based on any other factor other than sex, gender, sexual orientation, race, ethnicity, nationality, religion, caste, age, medical disability or impairment, and/or any other like circumstances (See 29 U.S.C.A. § 206(d)(1); Article 23, United Nations Universal Declaration of Human Rights; Article 7, International Covenant on Economic, Social and Cultural Rights; Article 26, International Covenant on Civil and Political Rights); and
    
    3.2.2. Allow for reasonable limitation of working hours and periodic holidays with pay (See Article 24, United Nations Universal Declaration of Human Rights; Article 7, International Covenant on Economic, Social and Cultural Rights).
    
    4. SUPPLY CHAIN IMPACTED PARTIES:
    
    This section identifies additional individuals or entities that a Licensee could harm as a result of violating the Ethical Standards section, the condition that the Licensee must voluntarily accept a Duty of Care for those individuals or entities, and the right to a private right of action that those individuals or entities possess as a result of violations of the Ethical Standards section.
    
    4.1. In addition to the above Ethical Standards, Licensee voluntarily accepts a Duty of Care for Supply Chain Impacted Parties of this License, including individuals and communities impacted by violations of the Ethical Standards. The Duty of Care is breached when a provision within the Ethical Standards section is violated by a Licensee, one of its successors or assigns, or by an individual or entity that exists within the Supply Chain prior to a good or service reaching the Licensee.
    
    4.2. Breaches of the Duty of Care, as stated within this section, shall create a private right of action, allowing any Supply Chain Impacted Party harmed by the Licensee to take legal action against the Licensee in accordance with applicable negligence laws, whether they be in tort law, delict law, and/or similar bodies of law closely related to tort and/or delict law, regardless if Licensee is directly responsible for the harms suffered by a Supply Chain Impacted Party. Nothing in this section shall be interpreted to include acts committed by individuals outside of the scope of his/her/their employment.
    
    5. NOTICE: This section explains when a Licensee must notify others of the License.
    
    5.1. Distribution of Notice: Licensee must ensure that everyone who receives a copy of or uses any part of Software from Licensee, with or without changes, also receives the License and the copyright notice included with Software (and if included by the Licensor, patent, trademark, and attribution notice). Licensee must ensure that License is prominently displayed so that any individual or entity seeking to download, copy, use, or otherwise receive any part of Software from Licensee is notified of this License and its terms and conditions. Licensee must cause any modified versions of the Software to carry prominent notices stating that Licensee changed the Software.
    
    5.2. Modified Software: Licensee is free to create modifications of the Software and distribute only the modified portion created by Licensee, however, any derivative work stemming from the Software or its code must be distributed pursuant to this License, including this Notice provision.
    
    5.3. Recipients as Licensees: Any individual or entity that uses, copies, modifies, reproduces, distributes, or prepares derivative work based upon the Software, all or part of the Software’s code, or a derivative work developed by using the Software, including a portion of its code, is a Licensee as defined above and is subject to the terms and conditions of this License.
    
    6. REPRESENTATIONS AND WARRANTIES:
    
    6.1. Disclaimer of Warranty: TO THE FULL EXTENT ALLOWED BY LAW, THIS SOFTWARE COMES “AS IS,” WITHOUT ANY WARRANTY, EXPRESS OR IMPLIED, AND LICENSOR SHALL NOT BE LIABLE TO ANY PERSON OR ENTITY FOR ANY DAMAGES OR OTHER LIABILITY ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THIS LICENSE, UNDER ANY LEGAL CLAIM.
    
    6.2. Limitation of Liability: LICENSEE SHALL HOLD LICENSOR HARMLESS AGAINST ANY AND ALL CLAIMS, DEBTS, DUES, LIABILITIES, LIENS, CAUSES OF ACTION, DEMANDS, OBLIGATIONS, DISPUTES, DAMAGES, LOSSES, EXPENSES, ATTORNEYS' FEES, COSTS, LIABILITIES, AND ALL OTHER CLAIMS OF EVERY KIND AND NATURE WHATSOEVER, WHETHER KNOWN OR UNKNOWN, ANTICIPATED OR UNANTICIPATED, FORESEEN OR UNFORESEEN, ACCRUED OR UNACCRUED, DISCLOSED OR UNDISCLOSED, ARISING OUT OF OR RELATING TO LICENSEE’S USE OF THE SOFTWARE. NOTHING IN THIS SECTION SHOULD BE INTERPRETED TO REQUIRE LICENSEE TO INDEMNIFY LICENSOR, NOR REQUIRE LICENSOR TO INDEMNIFY LICENSEE.
    
    7. TERMINATION
    
    7.1. Violations of Ethical Standards or Breaching Duty of Care: If Licensee violates the Ethical Standards section or Licensee, or any other person or entity within the Supply Chain prior to a good or service reaching the Licensee, breaches its Duty of Care to Supply Chain Impacted Parties, Licensee must remedy the violation or harm caused by Licensee within 30 days of being notified of the violation or harm. If Licensee fails to remedy the violation or harm within 30 days, all rights in the Software granted to Licensee by License will be null and void as between Licensor and Licensee.
    
    7.2. Failure of Notice: If any person or entity notifies Licensee in writing that Licensee has not complied with the Notice section of this License, Licensee can keep this License by taking all practical steps to comply within 30 days after the notice of noncompliance. If Licensee does not do so, Licensee’s License (and all rights licensed hereunder) will end immediately.
    
    7.3. Judicial Findings: In the event Licensee is found by a civil, criminal, administrative, or other court of competent jurisdiction, or some other adjudicating body with legal authority, to have committed actions which are in violation of the Ethical Standards or Supply Chain Impacted Party sections of this License, all rights granted to Licensee by this License will terminate immediately.
    
    7.4. Patent Litigation: If Licensee institutes patent litigation against any entity (including a cross-claim or counterclaim in a suit) alleging that the Software, all or part of the Software’s code, or a derivative work developed using the Software, including a portion of its code, constitutes direct or contributory patent infringement, then any patent license, along with all other rights, granted to Licensee under this License will terminate as of the date such litigation is filed.
    
    7.5. Additional Remedies: Termination of the License by failing to remedy harms in no way prevents Licensor or Supply Chain Impacted Party from seeking appropriate remedies at law or in equity.
    
    8. MISCELLANEOUS:
    
    8.1. Conditions: Sections 3, 4.1, 5.1, 5.2, 7.1, 7.2, 7.3, and 7.4 are conditions of the rights granted to Licensee in the License.
    
    8.2. Equitable Relief: Licensor and any Supply Chain Impacted Party shall be entitled to equitable relief, including injunctive relief or specific performance of the terms hereof, in addition to any other remedy to which they are entitled at law or in equity.
    
    8.3. Severability: If any term or provision of this License is determined to be invalid, illegal, or unenforceable by a court of competent jurisdiction, any such determination of invalidity, illegality, or unenforceability shall not affect any other term or provision of this License or invalidate or render unenforceable such term or provision in any other jurisdiction. If the determination of invalidity, illegality, or unenforceability by a court of competent jurisdiction pertains to the terms or provisions contained in the Ethical Standards section of this License, all rights in the Software granted to Licensee shall be deemed null and void as between Licensor and Licensee.
    
    8.4. Section Titles: Section titles are solely written for organizational purposes and should not be used to interpret the language within each section.
    
    8.5. Citations: Citations are solely written to provide context for the source of the provisions in the Ethical Standards.
    
    8.6. Section Summaries: Some sections have a brief italicized description which is provided for the sole purpose of briefly describing the section and should not be used to interpret the terms of the License.
    
    8.7. Entire License: This is the entire License between the Licensor and Licensee with respect to the claims released herein and that the consideration stated herein is the only consideration or compensation to be paid or exchanged between them for this License. This License cannot be modified or amended except in a writing signed by Licensor and Licensee.
    
    8.8. Successors and Assigns: This License shall be binding upon and inure to the benefit of the Licensor’s and Licensee’s respective heirs, successors, and assigns.`;
  }

  if (license === 'EPL_1.0' ) {
    licenseSection = `Eclipse Public License - v 1.0
    THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.
    
    1. DEFINITIONS
    
    "Contribution" means:
    
    a) in the case of the initial Contributor, the initial code and documentation distributed under this Agreement, and
    
    b) in the case of each subsequent Contributor:
    
    i) changes to the Program, and
    
    ii) additions to the Program;
    
    where such changes and/or additions to the Program originate from and are distributed by that particular Contributor. A Contribution 'originates' from a Contributor if it was added to the Program by such Contributor itself or anyone acting on such Contributor's behalf. Contributions do not include additions to the Program which: (i) are separate modules of software distributed in conjunction with the Program under their own license agreement, and (ii) are not derivative works of the Program.
    
    "Contributor" means any person or entity that distributes the Program.
    
    "Licensed Patents" mean patent claims licensable by a Contributor which are necessarily infringed by the use or sale of its Contribution alone or when combined with the Program.
    
    "Program" means the Contributions distributed in accordance with this Agreement.
    
    "Recipient" means anyone who receives the Program under this Agreement, including all Contributors.
    
    2. GRANT OF RIGHTS
    
    a) Subject to the terms of this Agreement, each Contributor hereby grants Recipient a non-exclusive, worldwide, royalty-free copyright license to reproduce, prepare derivative works of, publicly display, publicly perform, distribute and sublicense the Contribution of such Contributor, if any, and such derivative works, in source code and object code form.
    
    b) Subject to the terms of this Agreement, each Contributor hereby grants Recipient a non-exclusive, worldwide, royalty-free patent license under Licensed Patents to make, use, sell, offer to sell, import and otherwise transfer the Contribution of such Contributor, if any, in source code and object code form. This patent license shall apply to the combination of the Contribution and the Program if, at the time the Contribution is added by the Contributor, such addition of the Contribution causes such combination to be covered by the Licensed Patents. The patent license shall not apply to any other combinations which include the Contribution. No hardware per se is licensed hereunder.
    
    c) Recipient understands that although each Contributor grants the licenses to its Contributions set forth herein, no assurances are provided by any Contributor that the Program does not infringe the patent or other intellectual property rights of any other entity. Each Contributor disclaims any liability to Recipient for claims brought by any other entity based on infringement of intellectual property rights or otherwise. As a condition to exercising the rights and licenses granted hereunder, each Recipient hereby assumes sole responsibility to secure any other intellectual property rights needed, if any. For example, if a third party patent license is required to allow Recipient to distribute the Program, it is Recipient's responsibility to acquire that license before distributing the Program.
    
    d) Each Contributor represents that to its knowledge it has sufficient copyright rights in its Contribution, if any, to grant the copyright license set forth in this Agreement.
    
    3. REQUIREMENTS
    
    A Contributor may choose to distribute the Program in object code form under its own license agreement, provided that:
    
    a) it complies with the terms and conditions of this Agreement; and
    
    b) its license agreement:
    
    i) effectively disclaims on behalf of all Contributors all warranties and conditions, express and implied, including warranties or conditions of title and non-infringement, and implied warranties or conditions of merchantability and fitness for a particular purpose;
    
    ii) effectively excludes on behalf of all Contributors all liability for damages, including direct, indirect, special, incidental and consequential damages, such as lost profits;
    
    iii) states that any provisions which differ from this Agreement are offered by that Contributor alone and not by any other party; and
    
    iv) states that source code for the Program is available from such Contributor, and informs licensees how to obtain it in a reasonable manner on or through a medium customarily used for software exchange.
    
    When the Program is made available in source code form:
    
    a) it must be made available under this Agreement; and
    
    b) a copy of this Agreement must be included with each copy of the Program.
    
    Contributors may not remove or alter any copyright notices contained within the Program.
    
    Each Contributor must identify itself as the originator of its Contribution, if any, in a manner that reasonably allows subsequent Recipients to identify the originator of the Contribution.
    
    4. COMMERCIAL DISTRIBUTION
    
    Commercial distributors of software may accept certain responsibilities with respect to end users, business partners and the like. While this license is intended to facilitate the commercial use of the Program, the Contributor who includes the Program in a commercial product offering should do so in a manner which does not create potential liability for other Contributors. Therefore, if a Contributor includes the Program in a commercial product offering, such Contributor ("Commercial Contributor") hereby agrees to defend and indemnify every other Contributor ("Indemnified Contributor") against any losses, damages and costs (collectively "Losses") arising from claims, lawsuits and other legal actions brought by a third party against the Indemnified Contributor to the extent caused by the acts or omissions of such Commercial Contributor in connection with its distribution of the Program in a commercial product offering. The obligations in this section do not apply to any claims or Losses relating to any actual or alleged intellectual property infringement. In order to qualify, an Indemnified Contributor must: a) promptly notify the Commercial Contributor in writing of such claim, and b) allow the Commercial Contributor to control, and cooperate with the Commercial Contributor in, the defense and any related settlement negotiations. The Indemnified Contributor may participate in any such claim at its own expense.
    
    For example, a Contributor might include the Program in a commercial product offering, Product X. That Contributor is then a Commercial Contributor. If that Commercial Contributor then makes performance claims, or offers warranties related to Product X, those performance claims and warranties are such Commercial Contributor's responsibility alone. Under this section, the Commercial Contributor would have to defend claims against the other Contributors related to those performance claims and warranties, and if a court requires any other Contributor to pay any damages as a result, the Commercial Contributor must pay those damages.
    
    5. NO WARRANTY
    
    EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, THE PROGRAM IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES OR CONDITIONS OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Each Recipient is solely responsible for determining the appropriateness of using and distributing the Program and assumes all risks associated with its exercise of rights under this Agreement , including but not limited to the risks and costs of program errors, compliance with applicable laws, damage to or loss of data, programs or equipment, and unavailability or interruption of operations.
    
    6. DISCLAIMER OF LIABILITY
    
    EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, NEITHER RECIPIENT NOR ANY CONTRIBUTORS SHALL HAVE ANY LIABILITY FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING WITHOUT LIMITATION LOST PROFITS), HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OR DISTRIBUTION OF THE PROGRAM OR THE EXERCISE OF ANY RIGHTS GRANTED HEREUNDER, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
    
    7. GENERAL
    
    If any provision of this Agreement is invalid or unenforceable under applicable law, it shall not affect the validity or enforceability of the remainder of the terms of this Agreement, and without further action by the parties hereto, such provision shall be reformed to the minimum extent necessary to make such provision valid and enforceable.
    
    If Recipient institutes patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Program itself (excluding combinations of the Program with other software or hardware) infringes such Recipient's patent(s), then such Recipient's rights granted under Section 2(b) shall terminate as of the date such litigation is filed.
    
    All Recipient's rights under this Agreement shall terminate if it fails to comply with any of the material terms or conditions of this Agreement and does not cure such failure in a reasonable period of time after becoming aware of such noncompliance. If all Recipient's rights under this Agreement terminate, Recipient agrees to cease use and distribution of the Program as soon as reasonably practicable. However, Recipient's obligations under this Agreement and any licenses granted by Recipient relating to the Program shall continue and survive.
    
    Everyone is permitted to copy and distribute copies of this Agreement, but in order to avoid inconsistency the Agreement is copyrighted and may only be modified in the following manner. The Agreement Steward reserves the right to publish new versions (including revisions) of this Agreement from time to time. No one other than the Agreement Steward has the right to modify this Agreement. The Eclipse Foundation is the initial Agreement Steward. The Eclipse Foundation may assign the responsibility to serve as the Agreement Steward to a suitable separate entity. Each new version of the Agreement will be given a distinguishing version number. The Program (including Contributions) may always be distributed subject to the version of the Agreement under which it was received. In addition, after a new version of the Agreement is published, Contributor may elect to distribute the Program (including its Contributions) under the new version. Except as expressly stated in Sections 2(a) and 2(b) above, Recipient receives no rights or licenses to the intellectual property of any Contributor under this Agreement, whether expressly, by implication, estoppel or otherwise. All rights in the Program not expressly granted under this Agreement are reserved.
    
    This Agreement is governed by the laws of the State of New York and the intellectual property laws of the United States of America. No party to this Agreement will bring a legal action under this Agreement more than one year after the cause of action arose. Each party waives its rights to a jury trial in any resulting litigation.`;
  }

  if (license === 'Apache_2.0' ) {
    licenseSection = `Apache License
    Version 2.0, January 2004
    [http://www.apache.org/licenses/](http://www.apache.org/licenses/)
    
    TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION
    
    1. Definitions.
    
    "License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.
    
    "Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.
    
    "Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.
    
    "You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.
    
    "Source" form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.
    
    "Object" form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.
    
    "Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work (an example is provided in the Appendix below).
    
    "Derivative Works" shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work and Derivative Works thereof.
    
    "Contribution" shall mean any work of authorship, including the original version of the Work and any modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as "Not a Contribution."
    
    "Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Work.
    
    2. Grant of Copyright License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.
    
    3. Grant of Patent License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.
    
    4. Redistribution. You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:
    
    You must give any other recipients of the Work or Derivative Works a copy of this License; and
    You must cause any modified files to carry prominent notices stating that You changed the files; and
    You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works; and
    If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License.
    
    You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License.
    5. Submission of Contributions. Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate license agreement you may have executed with Licensor regarding such Contributions.
    
    6. Trademarks. This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.
    
    7. Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.
    
    8. Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.
    
    9. Accepting Warranty or Additional Liability. While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability.
    
    END OF TERMS AND CONDITIONS`;
  } return licenseSection;
}

function generateLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

function generateLicenseLink(license) {
  return `[License](https://opensource.org/licenses/${license})`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title}
    ${generateLicenseBadge(data.license)}
    ${generateLicenseLink(data.license)}

    ## Table of Contents
    
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Author](#author)
    - [Contributors](#contributors)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Description
    
    ${data.description}
    
    [Link to Deployed website](${data.website})
    
    ## Installation
    
    ${data.installation}
    
    ## Usage
    
    ${data.usage}
    
    ## License
    
    ${renderLicenseSection(data.license)}
    
    ## Author
    
    ${data.realName}
    [GitHub](https://github.com/${data.username}/)
    
    ## Contributors
    Special thanks to:
    ${data.contributors}
    
    ## Tests
    
    ${data.test}
    
    ## Questions
    If you have any questions, my GitHub is [GitHub](https://github.com/${data.username}/).
    You can also reach me by email at [${data.email}](${data.email}).
    `};
    


module.exports = generateMarkdown;
