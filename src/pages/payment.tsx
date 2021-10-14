import { Sidebar } from "@app/components";
import { BaseLayout } from "@app/components/layout";
import React from "react";
import { Layout, DetailProducts, DetailOrder } from "@app/modules/payment";
function Page() {
  return (
    <BaseLayout sidebar={<Sidebar></Sidebar>}>
      <Layout>
        {{
          resume: <DetailProducts />,
          detail: <DetailOrder />,
        }}
      </Layout>
    </BaseLayout>
  );
}

export default Page;
