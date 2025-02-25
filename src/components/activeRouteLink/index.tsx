import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { Children } from "react";
import Link from "next/link";

const ActiveLink = ({ children, activeClassName, href, ...props }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || "";

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    asPath === href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;
  console.log(asPath, href, asPath, props.as);
  return (
    <Link href={href}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
};

export default ActiveLink;
