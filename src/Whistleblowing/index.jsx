import InputConplaintForm from "./complaint_form";
import StyledCheckbox from "./checkbox";

export default function Whistleblowing(){

    

    return(

        <div>
             <div className="relative bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed z-20 bg-white">
                <div className="bg-cover h-screen bg-[url(https://drive.google.com/uc?export=view&id=19jdeLIEDDBYocV06j6pCxQPGIpKwKMEi)] bg-no-repeat z-10">
                

                    <div className="container relative h-full py-36">
                    <div className="text-green-900 text-center">
                        <h2 className="my-72 text-9xl font-semibold"> WHISTLEBLOWING</h2>
                    
                    </div>
                    </div>
                
                </div>
            </div>
            <div className="relative bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden">
                <div className=" bg-scroll h-screen bg-[url(https://drive.google.com/uc?export=view&id=1VbqaCvp6OGGFT11eaatz_AqWai8yKYol)] bg-repeat z-10">
                <div className="container text-back p-16">
                    <h1 className="font-extrabold">1. Principle and justification</h1>
                    <p className="text-left">The policy for handling complaints has been established by Teck Bee Hang Co.,
Ltd., attempting to conduct business that upholds ethical standards in addition to
effective corporate governance If a whistleblower is identified, ensure a fair
investigation to reach an equitable outcome. To satisfy the convenience requirements
of both internal and external complainants</p><br></br>
                    <h2 className="font-extrabold">2. Whistleblower Protection and Confidentiality</h2>
                    <p className="text-left">To protect the legal rights of truthful information providers and complainants. The
company will keep the complainant&#39;s or informant&#39;s identity, address, and other
information private. And maintain the privacy of the complainant&#39;s and informant&#39;s
information It won&#39;t impede the reporter&#39;s work or have any unfavorable
consequences based on the list of clues, Only individuals in charge of investigating
complaints will be allowed access to such information by the Company. The given
information will be kept private. Don&#39;t disclose information to anyone who doesn&#39;t
need it. Unless it is a disclosure made in accordance with a legal obligation.</p>
                    <br></br>
                    <h3 className="font-extrabold">3. Guidelines for filing complaints</h3>
                    <p className="text-left">To receive information, submit an email to whistleblower@teckbeehang.com Then,
without notifying the source of complaint information, the chairman of the board of
directors and/or the chairman of the audit committee will assess the subject of the
complaint and pass the complaints to the authorized person in accordance with the
responsible unit that received the complaints. Until the conclusion of the complaints
process,CEO and Auditing Committee will conduct an investigation. The Company
may invite independent investigators, such as the Board of Directors, auditors,
internal auditors, forensic inspectors, police, and Ministry of Commerce and
Revenue divisions, to join in the inquiry if the report is essential or has legal ramifications.</p>
                <br></br>
                <h4 className="font-extrabold">4. Methods for submitting grievances</h4>
                <p className="text-left">The complainant must provide all relevant information, including their name,
address, and contact information. And addressed to the Audit Committee before
being sent Addressed to:<br></br>
Teck Bee Hang Co., Ltd.&#39;s<br></br>
CEO and Deputy CEO.<br></br>
Location: 157 Niphat Uthit 2 Road, Hat Yai District, Songkhla 90110<br></br>
<br></br>
You may also use an online system to file complaints.
<a className="font-bold"> https://teckbeehang.com/whistleblower/</a></p>
                <br></br>
                <p className="text-left">
                <a className="font-extrabold">5.</a>
The company investigates and handles complaints. The investigation results
should go to the appropriate agencies to report for the right people.
Send the complainant an email to let them know what we did and inform the
executives of the activities&#39; results for acknowledgment.</p>
                
                

                </div>
                
             
                </div>
                <div className="relative bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden">
                <div className=" bg-cover h-screen bg-[url(https://drive.google.com/uc?export=view&id=1VbqaCvp6OGGFT11eaatz_AqWai8yKYol)] bg-repeat z-10">
                <footer className="bg-white text-back text-start mx-16 p-8">
                    <div className="container mx-auto flex flex-col justify-center">
                        <div className="w-full front-normal px-4 mb-6">
                        <h2 className="text-xl font-extrabold mb-4">Complaint Form</h2>
                        </div>
                        <div className="w-full  px-4 mb-6">
                        
                        <h2 className="text-xl font-normal mb-4">Name-Surname</h2>
                        <InputConplaintForm></InputConplaintForm>
                        </div>
                        {/* <p className="mt-2">Entered Text: {inputText}</p> */}
                        
                        <div className="w-full  px-4 mb-6">
                        <h2 className="text-xl front-normal mb-4">Contact Number</h2>
                        <InputConplaintForm></InputConplaintForm>
                        </div>
                        <div className="w-full  px-4 mb-6">
                        <h2 className="text-xl front-normal mb-4">Email</h2>
                        <InputConplaintForm></InputConplaintForm>
                        </div>
                        <div className="w-full  px-4 mb-6">
                        <h2 className="text-xl front-normal mb-4">Type of Complaint</h2>
                        <InputConplaintForm></InputConplaintForm>
                        </div>
                        <div className="w-full  px-4 mb-6">
                        <h2 className="text-xl front-normal mb-4">Complaint Topics</h2>
                        
                        </div>
                        <div className="w-full  px-4 mb-6">
                        <h2 className="text-xl front-normal mb-4">Details</h2>
                        <InputConplaintForm></InputConplaintForm>
                        </div>
                        <div className="flex flex-col w-full px-4 mb-6">
                        <h2 className="text-xl front-normal mb-4">Attachment(if have)</h2>
                        <div className="flex flex-row">

                        
                        <span class="sr-only">Choose file</span>
                        <input type="file" 
                        className="block px-10 mx-8 w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-100
                        "/>
                        </div>
                        </div>
                        
                    </div>
                    <div className="flex flex-row p-4">
                        <StyledCheckbox></StyledCheckbox>
                        <p>I have read and accepted the conditions as stated in Personal protection policy in all respects and give consent to the collection, use and disclosure of my personal information, accorcding to the objectives stated above</p>
                    </div>
                    
                </footer>
                
                </div>
                </div>
                
            </div>

            

        </div>

    );
}