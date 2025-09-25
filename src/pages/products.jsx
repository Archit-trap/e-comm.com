import { ShootingStarsAndStarsBackgroundDemo } from "../assets/starsBackgroundCompiler";

export function ProductsPage() {
    return (
        <>
            <div className="absolute inset-0 -z-10">
                <ShootingStarsAndStarsBackgroundDemo />
            </div>
        </>
    );
}