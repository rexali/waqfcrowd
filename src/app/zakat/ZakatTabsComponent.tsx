import dynamic from "next/dynamic";

export const ZakatTabsComponent = dynamic(
    ()=>import("./zakat-tabs").then(mod=>mod.default),
    {
        ssr:false
    }
)