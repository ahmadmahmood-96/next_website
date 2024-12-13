"use client";
import React, { useState } from "react";

const Footer = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: "What is Digital Launchpad?",
            content:
                "Digital Launchpad is a monthly subscription product that gives you access to multiple programs from different online influencers, including Iman Gadzhi himself. You'll get instant access to 4 programs: The Launchpad by Iman, The Winning Store by Jordan Welch, Pen To Profit by Luis Berger, and 6-Figure Sales Rep by Paul Daley, as well as the student community. New programs get added regularly, multiple times a year, so that you always have the newest methods to make your first $1,000 online. Then, every month that you spend inside you'll unlock exclusive rewards and unreleased content, this way there's always new content for you to go through.",
        },
        {
            title: "How long will I have access to Digital Launchpad?",
            content:
                "Digital Launchpad is a monthly subscription, so you'll always have access to it for 30 days after your last payment- and your subscription automatically renews after 30 days. As long as you keep paying, you'll have continuous access to it. You can cancel your membership at any time. If you decide to join with the Yearly Plan, you'll have 12-month access to the platform.",
        },
        {
            title: "How can I unlock blocked content and the rewards?",
            content:
                "Digital Launchpad has a Leveling system that gives you access to new content & rewards as you level up. That includes new programs, LIVE calls, in-person meet-ups, premium channels in the community, etc. Your level is based on the time you've been inside Digital Launchpad for.",
        },
        {
            title: "Are there going to be new program releases?",
            content:
                "Yes. The gallery of programs inside Digital Launchpad is ever-growing, and we'll be releasing new programs inside multiple times a year so that you always have access to new & updated content.",
        },
        {
            title: "How does the leveling system work?",
            content:
                "Your level is based on the time you've been inside Digital Launchpad for. You start off as an Apprentice. After your first month inside, you get promoted to Craftsman. After your 2nd month inside, you become a Diplomat. After your 3rd month inside, you become a Lord. After your 5th month inside, you become a Prince. After your 11th month inside, you become a King. Finally, after your 23rd month inside, you become an Emperor.",
        },
        {
            title: "Is there a way to unlock all the rewards without having to wait for 12 months?",
            content:
                "Yes. When choosing the yearly plan, you'll join as a King straight away and get instant access to all the unlockable rewards for the first 12 months of the program.",
        },
    ];

    return (
        <>
            <div className="line-break">
                <div className="line-breaker"></div>
            </div>
            <section className="hero-stack money-back">
                <div className="centered-intro-4 _5-principales">
                    <div id="w-node-_96527aae-a5fe-1127-997c-2db33fd56cc6-cff0ff6b" className="text-block-17">frequently asked questions</div>
                    <h1 className="large-heading-4 smaller">Get Your questions answered</h1>
                </div>
                <div className="container-40">
                    <div className="hero-wrapper-two faq">
                        {accordionData.map((item, index) => (
                            <div key={index} className="accordion-item---brix tabs-accordion---brix bottom">
                                <div
                                    className="accordion-trigger---brix-2"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <div style={{ color: "rgb(255,255,255)" }} className="accordion-item-title---brix">
                                        {item.title}
                                    </div>
                                    <div className="open-close-icon-wrapper---brix">
                                        <div style={{ backgroundColor: "rgb(255,255,255)" }} className="open-close-line---brix"></div>
                                        <div
                                            style={{
                                                transform:
                                                    activeIndex === index
                                                        ? "rotate(180deg)"
                                                        : "rotate(90deg)",
                                            }}
                                            className="open-close-line---brix second-line---brix"
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        height: activeIndex === index ? "auto" : "0px",
                                        opacity: activeIndex === index ? 1 : 0,
                                        overflow: "hidden",
                                        transition: "all 0.3s ease",
                                    }}
                                    className="accordion-content---brix-2"
                                >
                                    <p className="accordion-paragraph---brix">{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="footer">
                <div className="container-19 w-container">
                    <img
                        src="images/652973ec5d33ccdb2baa1152_Typeface_White_600x102_1652973ec5d33ccdb2baa1152_Typeface_White_600x102.webp"
                        loading="lazy"
                        alt=""
                        className="image-66"
                    />
                    <p className="footer-links">
                        <a href="https://educate.io/contact-us" target="_blank" className="link-footer">Contact Us </a>| <a href="https://educate.io/privacy-policy" target="_blank" className="link-footer">Privacy Policy</a> | <a href="https://educate.io/terms-conditions"
                            target="_blank" className="link-footer">Terms &amp; Conditions</a>
                    </p>
                    <p className="footer-text">This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.<br /><br />©2023 educate.io. All Rights Reserved.</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
