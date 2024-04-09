import "./index.scss";

export default function Component({children, className, style = {}}) {
    return (
        <div style={style} className={`dark-box ${className}`}>
        {children}
        </div>
    )
} 