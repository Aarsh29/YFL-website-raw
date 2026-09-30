import { Activity, ArrowRight, Dumbbell, Flower2, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

const benefits = [
	{ icon: Flower2, title: "Personalized Practice" },
	{ icon: Dumbbell, title: "Better Strength & Flexibility" },
	{ icon: HeartPulse, title: "Greater Mind-Body Balance" },
	{ icon: Activity, title: "Consistent Progress" },
];

export function PrivateSession() {
	return (
		<div className="w-full overflow-hidden bg-white text-copy">
			<section className="relative min-h-[390px] overflow-hidden bg-[#d9dfc2] sm:min-h-[430px]">
				<img
					src="/assets/ChatGPT Image Aug 28, 2026, 02_55_46 PM 1.png"
					alt="A woman practicing a personalized yoga session at home"
					className="absolute inset-0 h-full w-full object-cover object-[38%_center]"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#dce2ca]/35 to-[#dce2ca]/90" />

				<div className="relative z-10 mx-auto min-h-[390px] max-w-[1200px] px-6 pb-12 pt-5 sm:min-h-[430px] sm:px-8 lg:px-10">
					<div className="ml-auto flex min-h-[320px] w-full max-w-[610px] flex-col justify-center pt-8 sm:min-h-[550px] sm:pt-0">
						<h1 className="font-heading text-[38px] font-medium leading-[1.05] text-[#172d16] sm:text-[46px] lg:text-[52px]">
							Private Session
						</h1>
						<p className="mt-3 font-heading text-[18px] leading-tight text-[#709252] sm:text-[20px]">
							Your yoga journey, your space, your pace.
						</p>
						<p className="mt-3 max-w-[520px] font-body text-[14px] leading-[1.65] text-body sm:text-[15px]">
							Experience personalized yoga sessions designed around your body,
							goals, and pace, with dedicated guidance every step of the way.
						</p>
						<Link to="/consultation#consultation-form" className="mt-6 inline-flex w-fit">
							<Button className="h-[44px] min-w-[275px] rounded-[6px] bg-link px-6 text-[12px] font-bold text-white shadow-[0_3px_7px_rgba(70,90,50,0.2)] hover:bg-action-dark sm:min-w-[300px]">
								BOOK A FREE CONSULTATION <ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</Link>
					</div>
				</div>
			</section>

			<section className="px-6 py-10 sm:px-8 sm:py-12 lg:px-10">
				<div className="relative mx-auto max-w-[1200px] border-b border-border-sage pb-5">
					<h2 className="font-heading text-[15px] font-bold uppercase text-heading">
						About the Program
					</h2>
					<div className="mt-5 max-w-[900px] space-y-1 font-body text-[12px] leading-[1.8] text-body-copy sm:text-[13px]">
						<p>
							Private Yoga Sessions are designed especially for you and your
							individual needs. Each session is personalized based on your
							goals, body condition, comfort and lifestyle. You receive focused
							guidance and a practice that works at your own pace.
						</p>
						<p className="font-bold">
							Every session is conducted online, so you can practice comfortably
							from your own home.
						</p>
					</div>
					<img
						src="/assets/Leaf.png"
						alt=""
						aria-hidden="true"
						className="pointer-events-none absolute bottom-0 right-0 hidden h-[105px] w-[105px] object-contain sm:block"
					/>
				</div>

				<div className="mx-auto max-w-[1200px] py-8 sm:py-9">
					<h2 className="font-heading text-[15px] font-bold uppercase text-heading">
						What You&apos;ll Gain
					</h2>
					<div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
						{benefits.map(({ icon: Icon, title }) => (
							<div
								key={title}
								className="flex min-h-[118px] flex-col items-center justify-center gap-3 rounded-[8px] bg-[#fffef1] px-4 py-5 text-center shadow-[0_4px_8px_rgba(0,0,0,0.16)] sm:min-h-[126px]"
							>
								<Icon className="h-7 w-7 text-[#79a25e]" strokeWidth={2.2} aria-hidden="true" />
								<p className="max-w-[180px] font-body text-[11px] leading-[1.45] text-ink sm:text-[12px]">
									{title}
								</p>
							</div>
						))}
					</div>
				</div>

				<div className="mx-auto max-w-[1200px] border-t border-[#dbe3d6] pt-7 sm:pt-8">
					<h2 className="font-heading text-[15px] font-bold uppercase text-heading">
						Who Is It For?
					</h2>
					<div className="mt-5 space-y-1 font-body text-[12px] leading-[1.8] text-body-copy sm:text-[13px]">
						<p>
							Perfect for anyone who prefers one-to-one guidance or has specific
							wellness goals. It is suitable for beginners, seniors, busy
							professionals, people returning to yoga, or anyone looking for a
							more personalized approach.
						</p>
						<p className="font-bold">
							Your body. Your goals. Your practice. Your journey.
						</p>
					</div>
				</div>
			</section>

			<section
				className="relative overflow-hidden bg-cover bg-center"
				style={{ backgroundImage: "url('/assets/Weight Loss CTA Background.png')" }}
			>
				<div className="absolute inset-0 bg-[#dce9b7]/45" />
				<div className="relative z-10 mx-auto flex min-h-[340px] max-w-[900px] flex-col items-center justify-center px-6 py-14 text-center sm:min-h-[390px]">
					<h2 className="font-heading text-[25px] font-bold uppercase leading-tight text-[#526e43] sm:text-[32px]">
						Yoga, Tailored Just for You
					</h2>
					<p className="mt-3 max-w-[620px] font-body text-[13px] leading-[1.7] text-[#263827] sm:text-[15px]">
						Experience personalized yoga sessions designed around your body,
						goals, and pace, with dedicated guidance every step of the way.
					</p>
					<Link to="/join-now" className="mt-6 inline-flex">
						<Button className="h-[44px] min-w-[250px] rounded-[6px] bg-link px-7 text-[12px] font-bold text-white shadow-[0_3px_7px_rgba(70,90,50,0.2)] hover:bg-action-dark">
							START YOUR JOURNEY <ArrowRight className="ml-2 h-4 w-4" />
						</Button>
					</Link>
				</div>
			</section>
		</div>
	);
}
