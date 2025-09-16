"use client"

import type React from "react"
import { useMemo, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

import OurTeamHeading from '@/assets/heading3.svg';

type Member = {
  id: string
  name: string
  role: string
  src?: string
}

const MEMBERS: Member[] = [
  { id: "1", name: "AMAN DEOL", role: "Technical Head" },
  { id: "2", name: "RIYA KORADWAR", role: "Manager Lead" },
  { id: "3", name: "ARCHIE JAIN", role: "Publicity Lead" },
  { id: "4", name: "RAGHAV MIGLANI", role: "GeneralSecretary" },
  { id: "5", name: "CHINMAY SINHA", role: "Chairperson" },
  { id: "6", name: "MANAN AGARWAL", role: "Vice Chairperson" },
  { id: "7", name: "MANSI SAXENA", role: "Co Secretary" },
  { id: "8", name: "DAKSH CHAUDHARY", role: "Project Lead" },
  { id: "9", name: "PRABHAT PANDEY", role: "R&D Lead" },
  { id: "10", name: "OJAS NAHTA", role: "Android Lead" },
]

export default function Dock() {
  const railRef = useRef<HTMLDivElement | null>(null)
  const [mouseX, setMouseX] = useState<number | null>(null)
  const [selected, setSelected] = useState<Member | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!railRef.current) return
    const rect = railRef.current.getBoundingClientRect()
    setMouseX(e.clientX - rect.left)
  }
  
  function onMouseLeave() {
    setMouseX(null)
    setHoveredId(null)
  }

  // cache centers of tiles for magnification computation
  const centers = useMemo(() => new Map<string, number>(), [])
  const setCenter = (id: string, el: HTMLButtonElement | null) => {
    if (!el || !railRef.current) return
    const left = railRef.current.getBoundingClientRect().left
    const r = el.getBoundingClientRect()
    centers.set(id, r.left - left + r.width / 2)
  }

  const computeScale = (id: string) => {
    if (mouseX == null) return 1
    const center = centers.get(id)
    if (center == null) return 1
    const distance = Math.abs(mouseX - center)
    const radius = 120
    const maxBoost = 0.5
    if (distance >= radius) return 1
    return Number((1 + maxBoost * (1 - distance / radius)).toFixed(3))
  }

  // center clicked tile in the scroll container
  const centerItem = (btn: HTMLButtonElement | null) => {
    if (!btn || !railRef.current) return
    const container = railRef.current
    const cRect = container.getBoundingClientRect()
    const bRect = btn.getBoundingClientRect()
    const itemCenter = bRect.left - cRect.left + container.scrollLeft + bRect.width / 2
    const targetScrollLeft = itemCenter - cRect.width / 2
    container.scrollTo({ left: targetScrollLeft, behavior: "smooth" })
  }

  return (
    <div className="w-full">
      {/* Our Team Heading */}
      <div className="flex justify-center mb-56">
        <Image
          src={OurTeamHeading}
          alt="Our Team"
          width={300}
          height={80}
          className="w-auto h-16 md:h-20"
        />
      </div>

      {/* Rounded translucent rail */}
      <div className="relative mx-auto mt-20 max-w-[980px] rounded-3xl border border-white/20 bg-white/10 p-4 shadow-[0_8px_30px_rgba(2,6,23,0.25)] backdrop-blur-md">
        <div className="rounded-2xl border border-white/20 bg-white/10 p-3">
          <div className="h-20 overflow-visible">
            <div
              ref={railRef}
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
                      className={cn(
          "flex items-end gap-4 overflow-x-auto px-2 pb-2 pt-1",
          "md:justify-center md:overflow-visible md:px-3",
          "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
        )}
              role="listbox"
              aria-label="Team member dock"
            >
            {MEMBERS.map((m) => (
              <DockItem
                key={m.id}
                member={m}
                computeScale={computeScale}
                setCenter={setCenter}
                onSelect={(mem, btn) => {
                  centerItem(btn)
                }}
                isActive={selected?.id === m.id}
                isHovered={hoveredId === m.id}
                onHover={setHoveredId}
              />
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DockItem({
  member,
  computeScale,
  setCenter,
  onSelect,
  isActive,
  isHovered,
  onHover,
}: {
  member: Member
  computeScale: (id: string) => number
  setCenter: (id: string, el: HTMLButtonElement | null) => void
  onSelect: (m: Member, el: HTMLButtonElement | null) => void
  isActive: boolean
  isHovered: boolean
  onHover: (id: string | null) => void
}) {
  const btnRef = useRef<HTMLButtonElement | null>(null)
  const scale = computeScale(member.id)
  const isExpanded = isHovered && scale > 1.1

  return (
    <button
      ref={(el) => {
        btnRef.current = el
        setCenter(member.id, el)
      }}
      onMouseEnter={() => onHover(member.id)}
      onFocus={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
      onBlur={() => onHover(null)}
      onClick={() => onSelect(member, btnRef.current)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onSelect(member, btnRef.current)
        }
      }}
      role="option"
      aria-selected={isActive}
      aria-label={`${member.name}, ${member.role}`}
      className={cn(
        "relative inline-flex flex-shrink-0 items-center justify-center",
        "rounded-lg bg-neutral-300/90 text-black",
        "transition-transform duration-200 ease-out will-change-transform",
        "shadow-[0_6px_20px_rgba(2,6,23,0.25)] ring-1 ring-black/10",
        isActive && "ring-2 ring-fuchsia-400",
        "aspect-square w-16 md:w-16"
      )}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "bottom center",
        zIndex: isExpanded ? 50 : 1,
      }}
    >
      {/* Default square photo */}
      <Image
        src={member.src || "/placeholder.svg?height=96&width=96&query=profile%20portrait"}
        alt=""
        width={96}
        height={96}
        className="pointer-events-none size-11 select-none rounded-md object-cover"
      />

      {/* Expanded hover content (absolutely positioned inside button) */}
      {isExpanded && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 flex flex-col items-center">
          <div className="mb-2 rounded bg-neutral-900 px-3 py-1 text-[12px] font-semibold tracking-wide text-white">
            {member.role.toUpperCase()}
          </div>
          <div className="rounded-xl bg-white/95 p-2 shadow-sm">
            <Image
              src={member.src || "/placeholder.svg?height=160&width=160&query=profile%20portrait"}
              alt=""
              width={160}
              height={160}
              className="size-[140px] rounded-lg object-cover"
            />
          </div>
          <div className="mt-3 w-full rounded-lg bg-white/90 px-4 py-2 text-center">
            <p className="whitespace-nowrap text-sm font-extrabold tracking-wide text-neutral-900">
              {member.name}
            </p>
          </div>
        </div>
      )}
    </button>
  )
}




export { Dock as TeamDock }