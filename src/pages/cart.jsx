import { ShootingStarsAndStarsBackgroundDemo } from "../assets/starsBackgroundCompiler";

export function CartPage() {
    return (
        <>
            <div className="absolute inset-0 -z-10">
                <ShootingStarsAndStarsBackgroundDemo />
            </div>
        </>
    );
}