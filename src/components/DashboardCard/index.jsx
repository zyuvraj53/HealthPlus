import React from "react";

function DashboardCard({
  text,
  icon,
  iconColor,
  value,
  description,
  descriptionColor="#00000099",
  descriptionIcon,
  descriptionIconRotation = 0,
  descriptionIconMirror = false,
}) {
  const formattedValue = value
    ?.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div
      className="rounded-xl w-full px-3 py-2 border-gray-300 border shadow-md"
      style={{
        background:
          "linear-gradient(to right, #ffffff 0%, #ffffff 66%, #f0fbff 100%)",
      }}
    >
      <div className="p-4">
        <div className="flex flex-row justify-between items-center gap-2">
          <div className="text-xl text-black text-semibold">{text}</div>
          {icon && (
            <div style={{ color: iconColor }}>
              {React.isValidElement(icon) ? icon : icon}
            </div>
          )}
        </div>

        <div className="mt-2">
          <span className="lg:text-4xl text-3xl font-bold">{formattedValue}</span>
        </div>

        {description && (
          <div className="mt-1 flex flex-row items-center gap-1">
            {descriptionIcon && (
              <div style={{ color: descriptionColor,transform: `${descriptionIconRotation ? `rotate(${descriptionIconRotation}deg)` : ""} ${
                  descriptionIconMirror ? "scaleX(-1)" : ""
                }`.trim(),  }}>
                {React.isValidElement(descriptionIcon)
                  ? descriptionIcon
                  : descriptionIcon}
              </div>
            )}
            <span style={{ color: descriptionColor }}>{description}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardCard;
