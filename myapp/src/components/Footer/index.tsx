import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import {BLOG_LINK, GITHUB_LINK} from "@/constants";

const Footer: React.FC = () => {
  const defaultMessage = 'Ghost 技术部出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'blog',
          title: 'CSDN 个人博客',
          href: BLOG_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <>Github <GithubOutlined /></>,
          href: GITHUB_LINK,
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
