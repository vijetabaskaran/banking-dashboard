import {categories , statuses } from "../data/products";

export default function CategoryFilters({ category , status , onCategory, onStatus , onClear , count}){
    return (
        <section className = "filters">
        <div className = "chips">
        {categories.map((c)=> (
            <button key = {c} className = {`chip ${category === c ? "active":""}`} onClick={() => onCategory (c)}>
                {c}
                </button>

        ))}

        </div>
        <div className ="filter-row">
        <select value = {status} onChange={(e)=> onStatus(e.target.value)} aria-label ="Filter by status">
        {statuses.map((s)=>(
            <option key={s} value={s} > {s==="All" ? "all Statuses":s} </option>

        ))}
        </select>
        <button className = "btn-outline" onClick={onClear}>Clear Filters</button>
        <span className = "count" > {count} product{count !==1 ? "s" : ""} found  </span>
        </div>
        </section>
    );
    }

