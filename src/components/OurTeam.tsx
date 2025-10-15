"use client"

import type React from "react"
import { useMemo, useRef, useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

import OurTeamHeading from '@/assets/heading3.svg'

type Member = {
  id: string
  name: string
  role: string
  src?: string
}

const MEMBERS: Member[] = [
  { id: "1", name: "AMAN DEOL", role: "Technical Head", src: "/team/aman.png" },
  { id: "2", name: "RIYA KORADWAR", role: "Manager Lead", src: "/team/riya.png" },
  { id: "3", name: "ARCHIE JAIN", role: "Publicity Lead", src: "/team/archie.png" },
  { id: "4", name: "RAGHAV MIGLANI", role: "General Secretary", src: "/team/raghav.png" },
  { id: "5", name: "CHINMAY SINHA", role: "Chairperson", src: "/team/chinmay.png" },
  { id: "6", name: "MANAN AGARWAL", role: "Vice Chairperson", src: "/team/manan.png" },
  { id: "7", name: "MANSI SAXENA", role: "Co Secretary", src: "/team/mansi.png" },
  { id: "8", name: "DAKSH CHAUDHARY", role: "Project Lead", src: "/team/daksh.png" },
  { id: "9", name: "PRABHAT PANDEY", role: "R&D Lead", src: "/team/prabhat.png" },
  { id: "10", name: "OJAS NAHTA", role: "Android Lead", src: "/team/ojas.png" },
]

export default function TeamDock() {
  return (
    <div id="our-team" className="w-full">
      {/* Background */}
      <div className="absolute left-0 -z-10 h-[1600px] w-[1400px] lg:h-[2310px] lg:w-[2000px]">
        <Image
          src="/bg-design-3.svg"
          alt="Background Design"
          fill
          className="object-contain object-left"
          priority
        />
      </div>

      {/* Heading */}
      <div className="flex justify-center md:mb-50 mb-10">
        <Image src={OurTeamHeading} alt="Our Team" width={800} height={140} />
      </div>

      {/* Desktop Dock */}
      <div className="hidden md:block">
        <DockDesktop />
      </div>

      {/* Mobile Spinner */}
      <div className="block md:hidden">
        <DockMobile />
      </div>
    </div>
  )
}

//
// 🔹 Desktop Dock (with hover expansion)
//
function DockDesktop() {
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

  // cache centers of tiles
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
    const maxBoost = 0.6
    if (distance >= radius) return 1
    return Number((1 + maxBoost * (1 - distance / radius)).toFixed(3))
  }

  const centerItem = (btn: HTMLButtonElement | null) => {
    if (!btn || !railRef.current) return
    const container = railRef.current
    const cRect = container.getBoundingClientRect()
    const bRect = btn.getBoundingClientRect()
    const itemCenter =
      bRect.left - cRect.left + container.scrollLeft + bRect.width / 2
    const targetScrollLeft = itemCenter - cRect.width / 2
    container.scrollTo({ left: targetScrollLeft, behavior: "smooth" })
  }

  return (
    <div className="relative mx-auto mt-10 max-w-[1100px] rounded-3xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur-md">
      <div
        ref={railRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={cn(
          "flex items-end gap-5 overflow-x-auto px-2 pb-2 pt-1",
          "md:justify-center md:overflow-visible md:px-10",
          "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
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
              setSelected(mem)
              centerItem(btn)
            }}
            isActive={selected?.id === m.id}
            isHovered={hoveredId === m.id}
            onHover={setHoveredId}
          />
        ))}
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
      className={cn(
        "relative inline-flex flex-shrink-0 items-center justify-center",
        "rounded-lg bg-neutral-300/90 text-black",
        "transition-transform duration-200 ease-out will-change-transform",
        "shadow-[0_6px_20px_rgba(2,6,23,0.25)] ring-1 ring-black/10",
        isActive && "ring-2 ring-fuchsia-400",
        "aspect-square w-20 md:w-20"
      )}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "bottom center",
        zIndex: isExpanded ? 50 : 1,
      }}
    >
      <Image
        src={member.src || "./profile.svg"}
        alt={member.name}
        width={100}
        height={100}
        className="pointer-events-none size-20 select-none rounded-md object-cover"
      />

      {/* Expanded hover details */}
      {isExpanded && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 flex flex-col items-center">
          <div className="mb-2 rounded bg-neutral-900 px-3 py-1 text-[12px] font-semibold tracking-wide text-white">
            {member.role.toUpperCase()}
          </div>
          <div className="rounded-xl bg-white/95 p-2 shadow-sm">
            <Image
              src={member.src || "./profile.svg"}
              alt=""
              width={140}
              height={140}
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

//
// 🔹 Mobile Spinner Dock
//

// repeat enough times to never "end"
const LOOP_MEMBERS = Array(20).fill(MEMBERS).flat()

function DockMobile() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  // calculate the "middle" index
  const middleIndex = Math.floor(LOOP_MEMBERS.length / 2)

  // scroll to the middle index on mount
  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current
    const child = container.children[middleIndex] as HTMLElement
    if (child) {
      child.scrollIntoView({ behavior: "instant", inline: "center", block: "nearest" })
      setActiveIndex(middleIndex)
    }
  }, [middleIndex])

  // detect closest to center while scrolling
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    function handleScroll() {
      const { offsetWidth } = container
      let closestIndex = 0
      let closestDistance = Infinity

      const children = Array.from(container.children) as HTMLElement[]
      children.forEach((child, index) => {
        const rect = child.getBoundingClientRect()
        const childCenter = rect.left + rect.width / 2
        const containerRect = container.getBoundingClientRect()
        const relativeCenter = childCenter - containerRect.left
        const distance = Math.abs(relativeCenter - offsetWidth / 2)
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setActiveIndex(closestIndex)
    }

    handleScroll()
    container.addEventListener("scroll", handleScroll, { passive: true })
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return
    const container = containerRef.current
    const child = container.children[index] as HTMLElement
    if (!child) return
    child.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
  }

  return (
    <div className="relative mx-auto mt-6 max-w-[95%] rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-md">
      {/* Left Arrow */}
      <button
        onClick={() => scrollToIndex(activeIndex - 1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white shadow-md hover:bg-black/60 z-10"
      >
        ◀
      </button>

      {/* Slider */}
      <div
        ref={containerRef}
        className="
          flex gap-6 overflow-x-auto px-10 pb-4 pt-4
          scroll-smooth
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
        "
      >
        {LOOP_MEMBERS.map((m, index) => {
          const isActive = index === activeIndex
          return (
            <div
              key={`${m.id}-${index}`}
              className="flex-shrink-0 flex flex-col items-center transition-all duration-200 ease-out"
              style={{
                transform: isActive ? "scale(1.2)" : "scale(0.8)",
                opacity: isActive ? 1 : 0.6,
              }}
            >
              <Image
                src={m.src || "/profile.svg"}
                alt={m.name}
                width={90}
                height={90}
                className="size-24 rounded-full object-cover shadow-lg"
              />
              <p className="mt-3 text-sm font-bold text-white">{m.name}</p>
              <p className="text-xs text-neutral-300">{m.role}</p>
            </div>
          )
        })}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scrollToIndex(activeIndex + 1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white shadow-md hover:bg-black/60 z-10"
      >
        ▶
      </button>
    </div>
  )
}