import UserTemplate from "../../src/containers/UserTemplate";
import { useRouter } from "next/router";
import userRequestService from "../../src/services/userService/user.service";
import { useEffect, useState } from "react";
import { DocumentContext } from "next/document";
import Link from "next/link";
import headerTitle from "../../src/components/headerTitle";
import LeftView from "../../src/components/leftView";

//https://600fdd7a6c21e1001704f836.mockapi.io/news/1
const headerData = {
  title: "Tin Tức",
};

function DetailsNews({ detail, ...props }) {
  headerData.title = detail.title;
  const baseUrlMeta = (meta_url: string, id: string) =>
    `tin-tuc/${meta_url}-${id}`;
  const renderDetailsNews = () => {
    const renderContent = (item) => {
      return (
        <div className="blog-details">
          <div className="article-image">
            <img src={item.image} alt="image" />
          </div>
          <div className="article-content">
            <div className="entry-meta">
              <ul>
                <li>
                  <i className="far fa-user-circle"></i> By:{" "}
                  <a href="#">{item.create_by}</a>
                </li>
                <li>
                  <i className="far fa-calendar-alt"></i> {item.create_date}
                </li>
                <li>
                  <i className="fas fa-tags"></i>{" "}
                  {item.tags.map((item, index) => {
                    return (
                      <>
                        {" "}
                        <a href="#" key={index}>
                          {item.title}
                        </a>
                      </>
                    );
                  })}
                </li>
                <li>
                  <i className="far fa-clock"></i> 2 Mins Read
                </li>
                <li>
                  <i className="fas fa-eye"></i>
                  {item.view}
                </li>
                <li>
                  <i className="far fa-comment-dots"></i>{" "}
                  <a href="#">3 Comments</a>
                </li>
              </ul>
            </div>
            {item.details}
          </div>
          <div className="article-footer">
            <div className="article-tags">
              <span>
                <i className="fas fa-bookmark"></i>
              </span>
              <a href="#">Fashion</a>,<a href="#">Games</a>,
              <a href="#">Travel</a>
            </div>
            <div className="article-share">
              <ul className="social">
                <li>
                  <a href="#" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    };
    return (
      <section className="blog-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              {renderContent(detail)}
              <div className="comments-area">
                <h3 className="comments-title">2 Comments:</h3>
                <ol className="comment-list">
                  <li className="comment">
                    <article className="comment-body">
                      <footer className="comment-meta">
                        <div className="comment-author vcard">
                          <img
                            src="/assets/img/author1.jpg"
                            className="avatar"
                            alt="image"
                          />
                          <b className="fn">James Anderson</b>
                          <span className="says">says:</span>
                        </div>
                        <div className="comment-metadata">
                          <a href="#">
                            <time>April 24, 2020 at 10:59 am</time>
                          </a>
                        </div>
                      </footer>
                      <div className="comment-content">
                        <p>
                          Lorem Ipsum has been the industry’s standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                          specimen book.
                        </p>
                      </div>
                      <div className="reply">
                        <a href="#" className="comment-reply-link">
                          Reply
                        </a>
                      </div>
                    </article>
                    <ol className="children">
                      <li className="comment">
                        <article className="comment-body">
                          <footer className="comment-meta">
                            <div className="comment-author vcard">
                              <img
                                src="/assets/img/author2.jpg"
                                className="avatar"
                                alt="image"
                              />
                              <b className="fn">Steven Smith</b>
                              <span className="says">says:</span>
                            </div>
                            <div className="comment-metadata">
                              <a href="#">
                                <time>April 24, 2020 at 10:59 am</time>
                              </a>
                            </div>
                          </footer>
                          <div className="comment-content">
                            <p>
                              Lorem Ipsum has been the industry’s standard dummy
                              text ever since the 1500s, when an unknown printer
                              took a galley of type and scrambled it to make a
                              type specimen book.
                            </p>
                          </div>
                          <div className="reply">
                            <a href="#" className="comment-reply-link">
                              Reply
                            </a>
                          </div>
                        </article>
                      </li>
                      <ol className="children">
                        <li className="comment">
                          <article className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <img
                                  src="/assets/img/author3.jpg"
                                  className="avatar"
                                  alt="image"
                                />
                                <b className="fn">Sarah Taylor</b>
                                <span className="says">says:</span>
                              </div>
                              <div className="comment-metadata">
                                <a href="#">
                                  <time>April 24, 2020 at 10:59 am</time>
                                </a>
                              </div>
                            </footer>
                            <div className="comment-content">
                              <p>
                                Lorem Ipsum has been the industry’s standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen book.
                              </p>
                            </div>
                            <div className="reply">
                              <a href="#" className="comment-reply-link">
                                Reply
                              </a>
                            </div>
                          </article>
                        </li>
                      </ol>
                    </ol>
                  </li>
                  <li className="comment">
                    <article className="comment-body">
                      <footer className="comment-meta">
                        <div className="comment-author vcard">
                          <img
                            src="/assets/img/author2.jpg"
                            className="avatar"
                            alt="image"
                          />
                          <b className="fn">John Doe</b>
                          <span className="says">says:</span>
                        </div>
                        <div className="comment-metadata">
                          <a href="#">
                            <time>April 24, 2020 at 10:59 am</time>
                          </a>
                        </div>
                      </footer>
                      <div className="comment-content">
                        <p>
                          Lorem Ipsum has been the industry’s standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                          specimen book.
                        </p>
                      </div>
                      <div className="reply">
                        <a href="#" className="comment-reply-link">
                          Reply
                        </a>
                      </div>
                    </article>
                    <ol className="children">
                      <li className="comment">
                        <article className="comment-body">
                          <footer className="comment-meta">
                            <div className="comment-author vcard">
                              <img
                                src="/assets/img/author4.jpg"
                                className="avatar"
                                alt="image"
                              />
                              <b className="fn">James Anderson</b>
                              <span className="says">says:</span>
                            </div>
                            <div className="comment-metadata">
                              <a href="#">
                                <time>April 24, 2020 at 10:59 am</time>
                              </a>
                            </div>
                          </footer>
                          <div className="comment-content">
                            <p>
                              Lorem Ipsum has been the industry’s standard dummy
                              text ever since the 1500s, when an unknown printer
                              took a galley of type and scrambled it to make a
                              type specimen book.
                            </p>
                          </div>
                          <div className="reply">
                            <a href="#" className="comment-reply-link">
                              Reply
                            </a>
                          </div>
                        </article>
                      </li>
                    </ol>
                  </li>
                </ol>
                <div className="comment-respond">
                  <h3 className="comment-reply-title">Leave a Reply</h3>
                  <form className="comment-form">
                    <p className="comment-notes">
                      <span id="email-notes">
                        Your email address will not be published.
                      </span>
                      Required fields are marked
                      <span className="required">*</span>
                    </p>
                    <p className="comment-form-comment">
                      <label>Comment</label>
                      <textarea
                        name="comment"
                        id="comment"
                        cols={45}
                        rows={5}
                        maxLength={65525}
                        required={true}
                      ></textarea>
                    </p>
                    <p className="comment-form-author">
                      <label>
                        Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="author"
                        name="author"
                        required={true}
                      />
                    </p>
                    <p className="comment-form-email">
                      <label>
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required={true}
                      />
                    </p>
                    <p className="comment-form-url">
                      <label>Website</label>
                      <input type="url" id="url" name="url" />
                    </p>
                    <p className="comment-form-cookies-consent">
                      <input
                        type="checkbox"
                        value="yes"
                        name="wp-comment-cookies-consent"
                        id="wp-comment-cookies-consent"
                      />
                      <label htmlFor="wp-comment-cookies-consent">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </p>
                    <p className="form-submit">
                      <input
                        type="submit"
                        name="submit"
                        id="submit"
                        className="submit"
                        value="Post Comment"
                      />
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">{LeftView()}</div>
          </div>
        </div>
        <div className="shape13">
          <img src="/assets/img/shape/13.svg" alt="image" />
        </div>
        <div className="shape14">
          <img src="/assets/img/shape/13.svg" alt="image" />
        </div>
      </section>
    );
  };
  return (
    <UserTemplate title="Chi tiết bài viết">
      {headerTitle(headerData)}
      {renderDetailsNews()}
    </UserTemplate>
  );
}

DetailsNews.getInitialProps = async (ctx: DocumentContext) => {
  const paramId = ctx.query.id;
  let res = null;
  if (typeof paramId === "string") {
    const id = paramId.split("-").pop();
    res = await userRequestService.getNewsById(id);
  }
  return { detail: res.data };
};
export default DetailsNews;
