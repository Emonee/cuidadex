'use client'

import TabButton from "./TabButton";

const TABS = [
  { label: "Cats", tab: "cats" },
  { label: "Dogs", tab: "dogs" },
]

export default function Tabs() {
  return (
    <div className="w-full border-b-2 border-purple-700/50 mb-5">
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