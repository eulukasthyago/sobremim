import Link from "next/link";
//import { Header, Avatar } from '../styles/global';
import { Box, Header, Avatar, Text, Nav, Anchor } from "grommet";

const HeaderPage = () => (
  <Header background="dark-1" pad="medium">
    <Box direction="row" align="center">
      <Avatar src="https://avatars1.githubusercontent.com/u/32553223?s=460&u=05a7c3f5626304aa22c520435be48a5327ef993e&v=4" />
      <Text size="large" margin="small" color="#fff">
        Lucas Tiago
      </Text>
    </Box>
    <Box direction="row">
      <Nav direction="row">
        <Link href="/" passHref>
          <Anchor>Home</Anchor>
        </Link>
        <Link href="/jobs" passHref>
          <Anchor>Projetos</Anchor>
        </Link>
        <Link href="/aboutme" passHref>
          <Anchor>Sobre</Anchor>
        </Link>
        <Link href="/blog" passHref>
          <Anchor>Blog</Anchor>
        </Link>
      </Nav>
    </Box>
  </Header>
);

export default HeaderPage;
