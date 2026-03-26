import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function MyCardWidget({ className = "" }) {
  return (
    <Card className={`card-dark w-full border-[#1F1F2B] ${className}`}>
      <CardHeader className="px-5 pt-5 pb-1">
        <CardTitle className="text-[14px] font-semibold text-[#F0F0F8]">My Card</CardTitle>
        <p className="text-[11px] text-[#55556A] mt-0.5">
          1 of 4 cards added
        </p>
      </CardHeader>
      
      <CardContent className="px-5 pb-5 pt-1">
        {/* Credit Card Visualization */}
        <div className="relative w-full aspect-[1.7/1] rounded-[14px] p-5 mb-5 overflow-hidden bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] flex flex-col justify-between">
          {/* Apple Logo (SVG) */}
          <div className="flex justify-between items-start">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M17.05,20.28c-0.96,0.95-2.15,1.72-3.41,1.72c-1.2,0-1.8,-0.74-3.3,-0.74c-1.5,0-2.1,0.73-3.3,0.74c-1.2,0-2.43-1.01-3.39-1.99C1.7,18.06,0,14.61,0,11.39c0-3.35,2.15-5.11,4.24-5.11c1.1,0,2.14,0.76,2.81,0.76c0.67,0,1.91-0.92,3.22-0.92c0.55,0,2.12,0.2,3.13,1.68c-0.08,0.05-1.87,1.09-1.87,3.32c0,2.67,2.33,3.56,2.36,3.57C13.86,17.43,15.71,18.96,17.05,20.28z M12.03,4.46c0.58-0.7,0.97-1.68,0.86-2.65c-0.84,0.03-1.85,0.56-2.45,1.26c-0.54,0.63-1.02,1.63-0.9,2.58C10.46,5.72,11.45,5.17,12.03,4.46z" />
            </svg>
          </div>

          <div className="text-[17px] font-medium text-white tracking-[0.2em] font-mono">
            •••• •••• •••• 2301
          </div>

          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-0.5">
              <span className="text-[11px] font-bold text-white tracking-wider uppercase">ARHAM KHAN</span>
              <div className="flex gap-4 mt-0.5">
                <div className="flex flex-col">
                  <span className="text-[7px] font-bold text-white/50 uppercase">VALID THRU</span>
                  <span className="text-[10px] font-medium text-white">06/30</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[7px] font-bold text-white/50 uppercase">CVV</span>
                  <span className="text-[10px] font-medium text-white">•••</span>
                </div>
              </div>
            </div>
            {/* Mastercard Logo (SVG) */}
            <div className="flex mr-1">
               <div className="w-7 h-7 rounded-full bg-white/30 backdrop-blur-sm -mr-3 border border-white/20"></div>
               <div className="w-7 h-7 rounded-full bg-white/40 backdrop-blur-sm border border-white/20"></div>
            </div>
          </div>
        </div>

        {/* Card Details */}
        <div className="flex flex-col gap-3 text-[12px]">
          <div className="flex justify-between items-center text-[#55556A]">
            <span>Card type</span>
            <span className="text-[#F0F0F8] font-medium">Virtual</span>
          </div>
          <div className="flex justify-between items-center text-[#55556A]">
            <span>Billing cycle</span>
            <span className="text-[#F0F0F8] font-medium">21st monthly</span>
          </div>
          <div className="flex justify-between items-center text-[#55556A]">
            <span>Card Limit</span>
            <span className="text-[#F0F0F8] font-semibold">$62,000.00</span>
          </div>
          <div className="flex justify-between items-center text-[#55556A]">
            <span>Available Balance</span>
            <span className="text-[#F0F0F8] font-semibold">$13,100.06</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 mt-5">
          <button className="w-full h-[36px] rounded-[8px] bg-[#3B6FE8] text-white text-[12px] font-bold hover:bg-[#4D7FF5] transition-colors">
            Manage Card
          </button>
          <button className="w-full h-[36px] rounded-[8px] bg-[#111118] border border-[#2A2A38] text-[#8888A4] text-[12px] font-bold hover:bg-[#1C1C26] hover:text-[#F0F0F8] transition-colors">
            Add Card
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
