import React from 'react';

const TermsAndConditions = () => {
     return (
        <div className="text-sm text-gray-600 my-4 max-h-40 overflow-y-auto border p-3 rounded bg-gray-50">
            <h2 className="font-semibold mb-2">Terms and Conditions</h2>
            <p>
              By signing up and creating an account, you agree to the following terms regarding the information you provide:
            </p>
            <p>
                Full Name:
                You must provide your real name.
                False or misleading names may result in suspension or deletion of your account.
            </p>
            <p>
                Email Address:
                You agree to provide a valid and active email address.
                The email will be used for communication purposes such as verification, password recovery, and important notifications.
                We will not share or sell your email to third parties without your consent.
            </p>    
            <p>
                Password and Confirm Password:
                You are responsible for maintaining the confidentiality of your password.
                Your password must meet the platform's minimum security requirements (e.g., length, character types).
                You must confirm your password to ensure accuracy.
                Do not share your password with anyone. We are not liable for unauthorized access due to user negligence.
            </p>

            <p>
                By clicking "Submit", you acknowledge that you have read, understood, and agreed to these terms regarding your personal information.

            </p>
        </div>
    );
};

export default TermsAndConditions;
