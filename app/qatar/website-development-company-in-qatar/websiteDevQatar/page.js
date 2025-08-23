"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";

export default function DetailwebsiteQatar() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // phone: "",
  });

  const [firstNo, setFirstNo] = useState(0);
  const [secondNo, setSecondNo] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const router = useRouter();

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setFirstNo(num1);
    setSecondNo(num2);
    setCorrectAnswer(num1 + num2);
    setUserAnswer("");
    setCaptchaVerified(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const verifyCaptcha = (e) => {
    e.preventDefault();
    if (parseInt(userAnswer) !== correctAnswer) {
      toast.error("Wrong Captcha! Try again.");
      generateCaptcha();
      return;
    }
    toast.success("Captcha Verified!!");
    setCaptchaVerified(true);
  };

  const phoneInputRef = useRef(null);

  useEffect(() => {
    if (phoneInputRef.current) {
      const iti = intlTelInput(phoneInputRef.current, {
        initialCountry: "in",
        geoIpLookup: (callback) => {
          fetch("https://ipapi.co/json")
            .then((res) => res.json())
            .then((data) => callback(data.country_code))
            .catch(() => callback("in"));
        },
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });

      // Optional: Store the instance if you ever need to validate
      phoneInputRef.current._iti = iti;
    }
  }, []);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    let updatedValue = value;

    // if (name === "phone") {
    //     updatedValue = value.replace(/[^0-9]/g, "").slice(0, 10);
    // }

    if (name === "name") {
      // ✅ Name only alphabets and spaces
      updatedValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phone = phoneInputRef.current?.value || "";
    const phoneDigitsOnly = phone.replace(/\D/g, ""); // Only digits

    if (!formData.name || !formData.email || !phone) {
      toast.error("Please fill all the fields!");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid email address!");
      return;
    }

    if (phoneDigitsOnly.length !== 10) {
      toast.error("Phone number must be exactly 10 digits!");
      return;
    }

    if (!captchaVerified) {
      toast.error("Please Verify the Captcha!!");
      generateCaptcha();
      return;
    }

    if (parseInt(userAnswer) !== correctAnswer) {
      toast.error("Wrong Captcha! Try again.");
      generateCaptcha();
      setCaptchaVerified(false);
      return;
    }

    setLoading(true);

    try {
      const dataToSend = {
        ...formData,
        phone: phoneDigitsOnly, // send clean number
      };
      const response = await fetch("https://backend.kusheldigi.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();
      console.log("Result--->>", result);

      if (response.ok || response.success === true || response.status === 200) {
        router.push("/thankyou");
      } else {
        alert(`❌ Failed to send email: ${result.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("❌ Error while sending email:", error);
    } finally {
      setLoading(false);
      setFormData({ name: "", email: "" });
      phoneInputRef.current.value = ""; // reset manually
      generateCaptcha();
    }
  };

  return (
    <section className="details-sec">
      <div className="details-desc">
        <h4>
          Website Development Company in Qatar: Offering Creative & Modern Web
          Solutions
        </h4>
        <p>
          Looking for a reliable website development company in Qatar that
          really gets your business? You're in the right spot! Your website is
          pretty much your online shopfront these days. It's the first thing
          people notice when they check you out. Seriously, first impressions
          are everything!
        </p>
        <p>
          An old and boring website can piss off the customers and impact sales,
          but a modern and sleek website attracts visitors and encourages them
          for more conversions. That’s what we do. We not only create simple
          websites- we design seamless experiences for customers that leave an
          impact on them.
        </p>
        <p>
          Our websites load quickly, are super secure, look great on mobile, and
          are made to keep your audience engaged. If you're a small startup
          wanting to show off your services or a big brand looking to amp up
          your online presence with an ecommerce store, we've got your back. We
          always ensure that every project we take on fits your brand's vibe and
          what you're aiming for.
        </p>
        <p>
          No dull templates here, just cool designs, easy navigation, and
          SEO-friendly sites that really deliver. At the end of the day, your
          website needs to be about more than just looking nice.
        </p>
        <p>
          It's all about getting people in the door, earning their trust, and
          making your business thrive. And that’s exactly what we do best.
        </p>
        <h5>Which Website Development Services Do We Provide in Qatar?</h5>
        <p>
          We've got everything you need for website development in Qatar to help
          your business shine online. We focus on creating websites that look
          awesome, load fast, and work seamlessly on any device.
        </p>
        <p>
          We make websites that match your brand's style and help your business
          stand out. We can whip up anything from simple business sites to
          really awesome online shops. We make it super easy for folks to find
          your site on Google, so they can discover you without any fuss. We add
          fun features like contact forms, chat support, and easy navigation to
          ensure visitors enjoy their experience.
        </p>
        <p>
          We always keep security and speed in mind. We've got the coolest tools
          and tech to keep your website safe and running like a charm. We make
          more than just websites. We also craft amazing online stores that
          attract customers, improve sales and connect with them.
        </p>

        <h5> Our Website Development Services in Qatar Include:</h5>
        <h6> Personalised Website Design</h6>
        <p>
          Your business is one of a kind, so your website should totally reflect
          that. We’ve got custom website design services available in Qatar just
          for you. We skip the dull templates. We whip up designs that totally
          vibe with your brand, style, and goals. We totally dive into your
          business, your customers, and what makes you tick. Next, we’re going
          to create a website that looks great and really connects with your
          audience.
        </p>
        <p>
          We prefer to keep things simple with clean designs, awesome visuals,
          and easy navigation. Your visitors should have a good time browsing
          and easily find what they're looking for. If you're looking for a
          straightforward corporate site or a cool portfolio, we can totally
          make your ideas happen.
        </p>

        <p>
          We ensure the design looks awesome on all devices. The online store
          looks amazing on all the devices. A custom design website stands
          unique among the crowd and helps you earn customers trust, resulting
          in more conversion rates. Your website isn't just a page; it's a solid
          digital identity for your business in Qatar.
        </p>
        <h5>E-Commerce Website Development</h5>
        <p>
          Online shopping is really taking off in Qatar, and starting an
          ecommerce site can create some awesome opportunities for your
          business. We're here to help you get your online store up and
          running—easy to use, secure, fast, responsive, SEO optimized and ready
          to boost your sales. We've got everything sorted from product pages to
          checkout, making sure it all goes off without a hitch.
        </p>
        <p>
          Customers can check out your products, toss stuff in their cart, and
          wrap things up without a hitch. A straightforward and easy-to-use
          design makes shopping super simple, leading to more sales for you.
          We've got secure payment options set up to help you feel confident.
          You can pay with cards, wallets, or even cash on delivery, whatever
          works best for you.
        </p>
        <p>
          Our ecommerce sites are totally responsive, so your store will look
          awesome on mobile devices as well. If you're looking to sell 10
          products or even 10,000, we've got a system that’s quick, dependable,
          and can grow with you. You get a super handy online store that helps
          your business connect with more customers all over Qatar and even
          further.
        </p>

        <h5> Content Management Systems (CMS)</h5>
        <p>
          Running a website doesn't have to be a hassle. That's why we provide
          CMS development services in Qatar. You can easily update your website
          content whenever you want with a CMS, no tech skills required!
        </p>

        <p>
          We team up with cool platforms like WordPress, Drupal, and Joomla. We
          create a system that’s easy to use, totally tailored to what you need.
          You can throw in new pages, tweak the text, upload some images, or
          even get your blogs out there in just a few minutes. A CMS website can
          totally help you save both time and cash. You can totally handle small
          changes on your own without needing a developer. You totally have
          control over your website. We also keep the CMS secure and make sure
          it runs fast.
        </p>
        <p>
          Our CMS solutions are perfect for businesses looking for some
          flexibility. No matter if you’ve got a corporate site, a news portal,
          or just a personal blog, you can totally manage it with ease. Your
          website stays fresh and updated with CMS development, and you don’t
          have to lift a finger.
        </p>

        <h5>Mobile-Friendly Web Development</h5>
        <p>
          More people in Qatar are using their smartphones to surf the web than
          ever before. That's why we make websites that work great on mobile
          devices. A responsive design makes sure your site looks awesome on any
          screen, whether it’s a phone, tablet, or laptop. We’re all about easy
          navigation, quick loading times, and layouts that fit perfectly on any
          device.
        </p>
        <p>
          Visitors shouldn't have a hard time reading text, clicking buttons, or
          checking out images on a smaller screen. A mobile-friendly website can
          totally boost your SEO ranking. Google really digs responsive
          websites, and they can help you score more traffic from search
          results. Also, when the user experience is better, folks tend to hang
          around on your site longer and are more inclined to reach out or buy
          something.
        </p>
        <p>
          In Qatar’s quick-paced digital scene, having a mobile-friendly website
          isn’t just nice to have—it’s essential. With our service, you’ll get a
          stylish, fast, responsive website that looks clean on any device and
          keeps your audience engaged results in boost sales.
        </p>

        <h5>Website Maintenance & Support</h5>
        <p>
          If you want your website to look good, you can't just make it and
          forget about it; you have to keep up with it regularly. That's why we
          work here in Qatar to maintain and help people with their websites. We
          make sure that your site works perfectly and has no problems.
        </p>

        <p>
          We take care of bugs, broken links, and loading errors fast so they
          don’t mess with your visitors. Keeping up with regular maintenance
          makes sure your website runs smoothly and gives users a great
          experience. We are here to help you with content updates and design
          changes whenever you need them. If you’re looking to add some new
          features or switch up the layouts, our support team is here to help
          you out anytime.
        </p>

        <p>
          Your website stays fresh and never feels outdated with regular
          maintenance.
        </p>

        <h5>SEO-Friendly Development</h5>
        <p>
          A nice-looking website isn't going to help if nobody visits it. That's
          why we keep it chill with SEO-friendly website development. We craft
          websites that look awesome, load fast, secure, third party integrated
          and are made to grab the attention of search engines.
        </p>
        <p>
          Getting a higher ranking means more visitors to your site, which could
          lead to more potential customers for your business. We ensure your
          website loads quickly because slow sites can seriously hurt sales. We
          whip up search-friendly URLs, sitemaps, and cool content areas that
          are all optimized. These will totally help you stand out online.
        </p>
        <p>
          If you’ve got a small local shop in Qatar or a business that’s on the
          rise, making your site SEO-friendly can really help you connect with
          the right crowd. It's not just a website; it's a spot that attracts
          visitors, pulls in customers, and helps your business grow.
        </p>
        {/* <p>
          We handle everything, from building the front end to making sure it
          works with your BigCommerce backend. Our PWA development solution will
          help you get your shop ready for the future and provide your consumers
          with a contemporary experience. We can make your shop better, smarter,
          and quicker all at the same time.
        </p> */}

        <h5>Why Choose Us for Website Development in Qatar?</h5>
        <p>
          Picking the right website development buddy can really change the game
          for your online success. A website is not just some online thing. Your
          brand's first impression, a sales tool, and a way to connect with
          customers. That's why we aim to create websites that look great and
          are also smart, secure, and easy to use.
        </p>
        <p>
          Our team mixes creativity, tech skills, and industry smarts for every
          project we take on. We understand what you’re looking for, get the
          vibe of your business, and then create a website that really
          highlights your brand.
        </p>
        <p>
          If you need an online store, a business website, or something
          one-of-a-kind, we’ve got you sorted with awesome quality and fast
          delivery.
        </p>
        <p>
          When you team up with us, you're not just getting a service—you’re
          getting a buddy who's all about helping you grow in the digital space.
        </p>
        <h5> Experienced Team You Can Rely On</h5>
        <p>
          It's very important to have a great knowledge when you're creating
          websites. From small start-ups to well-known brands, we've worked with
          all kinds of companies.
        </p>
        <p>
          We don’t just whip up pretty websites—we build smart ones that grab
          your audience's attention and deliver results. Our creative designers
          create something that's not only stylish but also really practical.
        </p>
        <p>
          After years of working on website development, we’ve really got the
          hang of tackling challenges quickly and delivering great results.
          We're here for you and will guide you through it all, so you won't
          feel lost. We're around to chat, swap ideas, and lend a hand whenever
          you need it.
        </p>
        <p>
          won't feel lost. We're around to chat, swap ideas, and lend a hand
          whenever you need it. That's why so many of our clients keep coming
          back for new projects and spreading the word to their friends about
          us.
        </p>

        <h5>Custom Solutions for Every Business</h5>
        <p>
          Every business has its own vibe, and its website should definitely
          show that off. We don't use old and pre-made templates, in fact we
          believe in custom solutions for each business.
        </p>
        <p>
          We create websites that match your brand’s style, vision, and goals.
          We have everything set up with the design and features, just for your
          business. So, what's the deal? A site that looks awesome and works
          hard to bring in customers.
        </p>

        <p>
          We make it easy with simple layouts, smooth navigation, and fast
          loading times.
        </p>

        <p>
          Your website is more than just a page; it’s like your online shop
          front. We highlight the coolest aspects of your business.
        </p>
        <h5>Affordable Packages Without Compromise</h5>
        <p>
          The cost of creating a website varies for every business. As a result,
          we provide flexible deals that allow businesses to create their
          desired websites within their budget. Are you just starting out or a
          settled business? We have some great options that won't break the bank
          for you.
        </p>

        <p>
          The cool thing is that you can get great products without spending a
          lot of money. Our cheap packages include great styles, useful
          features, and full customer service. We've got you covered to make
          sure you get the best value for your money. We’re straight up about
          our pricing, unlike many agencies out there.
        </p>
        <p>
          No hidden charges, nothing surprising. Just pick up the packages that
          have exactly what you’re looking for. We believe every business should
          have a strong online presence, no matter their budget. That's why we
          focus on making websites that are affordable, reliable, and super
          effective. You’ll score great quality without emptying your wallet for
          your business.
        </p>
        <h5>Easy-to-Use and Mobile-Friendly Websites</h5>

        <p>
          These days, a lot of users are just scrolling the web on their phones.
          That’s why we ensure your website looks awesome on any device—mobile,
          tablet, or desktop. We keep our designs simple and easy to get around.
          Everyone hates a website that's hard to navigate and takes forever to
          load.
        </p>
        <p>
          We create websites that are quick, neat, SEO optimized,
          mobile-friendly and super easy to navigate. We want to make sure your
          visitors have a great time right from the second they hit your page.
          Booking a service, shopping online, or just checking out your business
          is all super easy and smooth. We throw in some cool features to make
          your website fun and engaging. And we’re always thinking about what’s
          next for growth. Your website isn’t just reliable right now—it’s ready
          to roll with whatever updates and trends come along next. With us,
          you’ll get a website that’s mobile-friendly, super easy to navigate,
          and made to keep your visitors happy every time they stop by.
        </p>
        <h5> Ongoing Support and Maintenance</h5>
        <p>
          Getting your website up and running is just the beginning. A website
          that performs well needs some regular TLC to keep it safe, up-to-date,
          and user-friendly. That's our jam.
        </p>
        <p>
          We’re not the kind to just drop off your website and disappear—we’re
          in it for the long run. We take care of everything from fixing bugs
          and updating plugins to adding fresh content and launching awesome
          features, making sure your website stays in sync with your business.
        </p>
        <p>
          We keep an eye on how things are doing. A sluggish or old-school
          website can really drive customers away, but with our monitoring and
          regular check-ins, your site stays fast, safe, and reliable. Our
          support team replies quickly and is really easy to reach, so you won't
          be left hanging for answers.
        </p>
        <p>
          Think of us as your tech pals—always ready to help, support, and amp
          up your online presence whenever you need it. While you focus on
          growing, we’ve got the backend stuff covered. Your business is
          supported by a trustworthy website development company in Qatar. Ready
          for hassle-free website care? Let’s keep your digital journey smooth!
        </p>

        <div className="detail-foot">
          <h5>Our Contact Address</h5>
          <p className="detail-foot-p">Kushel Digi Solutions</p>
          <p>
            <span>PHONE :</span> +91 9045301702
          </p>
          <p>
            <span>EMAIL :</span> info@kusheldigi.com
          </p>
          <p>
            <span>ADDRESS :</span> First Floor, D242, F-32B, Sector 63 Rd,
            Noida, 201301 Uttar Pradesh
          </p>
        </div>
      </div>
      <form className="getquote-wrapper" onSubmit={handleSubmit}>
        <div className="getquote-form">
          <div className="getquote-header"></div>
          <h2>GET A FREE QUOTE</h2>

          <label className="getquote-form-label">Enter your name</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name*"
            className="form-input"
            value={formData?.name}
            onChange={handleChange}
            required
          />

          <label className="getquote-form-label">Enter your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            className="form-input"
            value={formData?.email}
            onChange={handleChange}
            required
          />

          <label className="getquote-form-label">Contact No.</label>
          <div className="form-phone-wrapper">
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number*"
              className="form-input phone-input"
              ref={phoneInputRef}
              onInput={(e) => {
                const digits = e.target.value.replace(/\D/g, "");
                if (digits.length <= 10) {
                  e.target.value = digits;
                } else {
                  e.target.value = digits.slice(0, 10); // trim to 11
                  toast.error("Only 10 digit phone number allowed!");
                }
              }}
              required
            />
          </div>

          {/* <div className="getquote-captcha-row">
                        <span>1 + 3</span>
                        <a href="#">VERIFY</a>
                    </div>
                    <input type="text" /> */}

          <div className="captcha-box">
            <div className="inputcapt">
              <label htmlFor="ans-captch" className="visually-hidden">
                {`${firstNo} + ${secondNo} = `}
              </label>
              <input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                required
                id="ans-captch"
              />
            </div>
            <span className="captcha-btn" onClick={verifyCaptcha}>
              Verify Captcha
            </span>
          </div>

          <button className="form-submit-btn" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
          {loading && <span className="loader3"></span>}

          <p className="getquote-terms">
            By clicking on submit, you agree to
            <br />
            our <a href="/terms-conditions">Terms & Condition</a> and{" "}
            <a href="/privacy-policy">Privacy policy</a>
          </p>
        </div>
      </form>
    </section>
  );
}
