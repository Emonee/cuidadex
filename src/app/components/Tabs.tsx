'use client'

import TabButton from "./TabButton";

const TABS = [
  { label: "Cats", tab: "cats" },
  { label: "Dogs", tab: "dogs" },
]

export default function Tabs() {
  return (
    <div>
      {TABS.map(tab => (
        <TabButton
          key={tab.tab}
          tab={tab.tab}
        >
          {tab.label}
        </TabButton>
      ))}
    </div>
  )
}