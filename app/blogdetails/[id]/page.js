"use client"
import { useRouter } from "next/navigation";
import Head from 'next/head';
import Navbar from "../../COMMON/Navbar";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  WhatsappShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";
import { FaWhatsapp, FaFacebook, FaLinkedin, FaFacebookMessenger, FaTwitter, FaEnvelope } from "react-icons/fa";


const baseurl = "https://backblog.kusheldigi.com";



function BlogDetails() {
  const [data, setData] = useState();
  const router = useRouter();
  const [currentPageUrl, setCurrentPageUrl] = useState(""); 


  const { id } = useParams();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPageUrl(window.location.href);
    }
  }, []);

  const [recent, setRecent] = useState([]);

  const fetchRecentBlog = async () => {
    try {
      const response = await fetch(`${baseurl}/api/v1/auth/getRecentBlog`);
      if (response.ok) {
        const data = await response.json();
        setRecent(data?.blogs);
      } else {
        console.error("Failed to fetch recent blogs:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching recent blogs:", error);
    }
  };

  const fetchBlogId = async () => {
    try {
      const response = await fetch(`${baseurl}/api/v1/auth/singleblog/${id}`);
      if (response.ok) {
        const resp = await response.json();
        setData(resp?.data);
      } else {
        console.error("Failed to fetch blog details:", response.statusText);
        // router.push("/blog");
      }
    } catch (error) {
      console.error("Error fetching blog details:", error);
    //   router.push("/blog");
    }
  };

  useEffect(() => {
    fetchRecentBlog();
    fetchBlogId();
  }, [id]);

  return (
    <div>
     
<Navbar />

      <div className="aboutwrap">
        <div className="aboutcont">
          <img src={data?.banner} className="aboutbanner" alt="kushel" />
          <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730457306/aboutfilter_qkl6e0.png" className="bannerfilter" alt="kushel" />
        </div>
      </div>

      <div className="blgdeta2wrap">
        <div className="blode2cont">
          <div className="blode2leftcon">
            <div>
              {/* <img src={data?.img} alt="kushel" className="blogdtaimgmain" /> */}
              <div className="blogbantitle">{data?.title}</div>
            </div>
            <div className="authodetail">
              <h1>Author: {data?.author || "Admin"}</h1>
              <span>Reading Time :{data?.time}</span>
              <span>{new Date(data?.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}</span>
            </div>
            <div className="makepoppinsfont" dangerouslySetInnerHTML={{ __html: data?.description }} />
          </div>

          <div className="blode2rightc">
            <h2>Recent Blogs</h2>
            {recent.map((item, index) => (
              <div key={index} className="singblosdarslidd">
                <img src={item?.images} alt="kushel" />
                <h4 onClick={() => router.push(`/blogdetails/${item._id}`)}>{item?.title}</h4>
                <p className="dateobje">
                  <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730457651/Mask_group_reswkg.png" alt="kushel" />
                  {new Date(item?.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="shareblogoptns">
        <h2>Don't forget to share this post!</h2>
        <div className="iconsshar">
          <WhatsappShareButton url={currentPageUrl} title="Check out this blog!">
            <div className="shareocciwrap">
              <FaWhatsapp className="sheicon" />
            </div>
          </WhatsappShareButton>
          <FacebookShareButton url={currentPageUrl} quote="Check out this blog!">
            <div className="shareocciwrap">
              <FaFacebook className="sheicon" />
            </div>
          </FacebookShareButton>
          <LinkedinShareButton url={currentPageUrl}  title="Check out this blog!" summary="An interesting blog you must read!" source="https://www.kusheldigi.com">
            <div className="shareocciwrap">
              <FaLinkedin className="sheicon" />
            </div>
          </LinkedinShareButton>
          <FacebookMessengerShareButton url={currentPageUrl} appId="YOUR_APP_ID">
            <div className="shareocciwrap">
              <FaFacebookMessenger className="sheicon" />
            </div>
          </FacebookMessengerShareButton>
          <TwitterShareButton url={currentPageUrl} title="Check out this blog!">
            <div className="shareocciwrap">
              <FaTwitter className="sheicon" />
            </div>
          </TwitterShareButton>
          <EmailShareButton url={currentPageUrl} subject="Check out this blog!" body="I found this blog interesting, check it out:">
            <div className="shareocciwrap">
              <FaEnvelope className="sheicon" />
            </div>
          </EmailShareButton>
        </div>
      </div>


    </div>
  );
}

export default BlogDetails;