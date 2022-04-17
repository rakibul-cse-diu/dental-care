import React from 'react';

const Blogs = () => {
    return (
        <div className='px-2 md:px-10 flex flex-col justify-center items-center my-4 min-h-screen'>
            <h2 className='text-3xl underline font-bold text-[#1F2B6C] mb-8'>Blogs</h2>
            <div>
                <div className='flex flex-col justify-center items-center mb-10'>
                    <h3 className='font-semibold mb-5 text-xl underline'>Q1: Difference between authorization and authentication</h3>
                    <table className='border-collapse border border-slate-500 w-3/4 text-center p-3'>
                        <thead>
                            <tr>
                                <th className='border border-slate-500'>Authentication</th>
                                <th className='border border-slate-500'>Authorization</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border border-slate-500'>Authentication verifies who the user is.</td>
                                <td className='border border-slate-500'>Authorization determines what resources a user can access.</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-500'>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</td>
                                <td className='border border-slate-500'>Authorization works through settings that are implemented and maintained by the organization.</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-500'>Authentication is the first step of a good identity and access management process.</td>
                                <td className='border border-slate-500'>Authorization always takes place after authentication.</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-500'>Authentication is visible to and partially changeable by the user.</td>
                                <td className='border border-slate-500'>Authorization isn't visible to or changeable by the user.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='flex flex-col justify-center items-center mb-10 mt-10'>
                    <h3 className='font-semibold mb-5 text-xl underline'>Q2: Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p className='w-full md:w-3/4'>Firebase Authentication makes it easier to get your users signed-in without having to understand the complexities behind implementing your own authentication system.</p><br />
                    <h4>Some Alternative of Firebase-</h4>
                    <ol className="list-decimal">
                        <li>Auth0</li>
                        <li>Okta</li>
                        <li>Keycloak</li>
                    </ol>
                </div>
                <div className='flex flex-col justify-center items-center mt-10'>
                    <h3 className='font-semibold mb-5 text-xl underline'>Q3: What other services does firebase provide other than authentication?</h3>
                    <p>Other Services provided by firebase-</p>
                    <ol className="list-decimal">
                        <li>Hosting</li>
                        <li>Cloud Firestore.</li>
                        <li>Remote Config.</li>
                        <li>Cloud Functions.</li>
                        <li>Cloud Messaging</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Blogs;