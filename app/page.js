import config from "@config/config.json";
import Cta from "@layouts/components/Cta";
import SeoMeta from "@layouts/SeoMeta";

import HomeBanner from "@layouts/partials/HomeBanner";
import Clients from "@layouts/partials/Clients";
import NewServices from "@layouts/partials/NewServices";
import HomeFeatures from "@layouts/partials/HomeFeatures";
import FeaturedProjects from "@layouts/partials/FeaturedProjects";
import ProfileSection from "@layouts/partials/ProfileSection";
import Testimonials from "@layouts/partials/Testimonials";
import HomeNews from "@layouts/partials/HomeNews";
import { getListPage } from "../lib/contentParser";

const Home = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  const { banner, clients, new_services, feature, featured_projects, profile_section, call_to_action } = frontmatter;
  const { title } = config.site;

  return (
    <>
      <SeoMeta title={title} />

      {/* Banner */}
      <HomeBanner banner={banner} />

      {/* Clients */}
      <Clients clients={clients} />

      {/* Testimonials */}
      <Testimonials />

      {/* New Services */}
      <NewServices new_services={new_services} />

      {/* Features */}
      <HomeFeatures feature={feature} />

      {/* Featured Projects */}
      <FeaturedProjects featured_projects={featured_projects} />

      {/* News */}
      <HomeNews />

      {/* Profile Section */}
      <ProfileSection profile_section={profile_section} />

      {/* Cta */}
      <Cta cta={call_to_action} />
    </>
  );
};

export default Home;
