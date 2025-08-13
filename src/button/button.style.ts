import { css } from "lit";
export default css`
.btn{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding:0;
    margin:0;
border:1px solid transparent;
background-color:transparent;
border-radius:4px;
text-decoration:none;
box-sizing:border-box;
}


.btn.btn--small{
min-height:32px;
}
.btn.btn--medium{
min-height:40px;
}

.btn.btn--large{
min-height:50px;
}



.btn .btn__label{
display:inline-block;
line-height:1;
font-weight:500;
font-family:var(--font-family)
}

.btn.btn--medium .btn__label{
font-size:14px;
padding:0 1rem;
}
.btn.btn--small .btn__label{
font-size:12px;
padding:0 0.75rem;
}
.btn.btn--large .btn__label{
font-size:16px;
padding:0 1.25rem;
}



.btn.btn--medium.btn--has-prefix{
padding-left:1rem;
}
.btn.btn--small.btn--has-prefix{
padding-left:0.75rem;
}
.btn.btn--large.btn--has-prefix{
padding-left:1.25rem;
}
.btn.btn--medium.btn--has-suffix{
padding-right:1rem;
}
.btn.btn--small.btn--has-suffix{
padding-right:0.75rem;
}
.btn.btn--large.btn--has-suffix{
padding-right:1.25rem;
}

.btn.btn--pill{
 border-radius:9999px
}

.btn.btn--circle{
 border-radius:9999px
}

.btn.btn--small.btn--circle{
width:32px;
}
.btn.btn--medium.btn--circle{
width:40px;
}

.btn.btn--large.btn--circle{
width:50px;
}

.btn.btn--default{
background-color:var(--foreground);
border-color:var(--border);
color:var(--text);
}
.btn.btn--primary{
background-color:var(--primary);
border-color:var(--primary);
color:white;
}
.btn.btn--success{
background-color:var(--success);
border-color:var(--success);
color:white;
}
.btn.btn--neutral{
background-color:var(--neutral);
border-color:var(--neutral);
color:white;
}
.btn.btn--warning{
background-color:var(--warning);
background-color:var(--warning);
color:black;
}
.btn.btn--danger{
background-color:var(--danger);
border-color:var(--danger);
color:white;
}
.btn.btn--default.btn--outline{
background-color:transparent;
border-color:var(--border);
color:var(--text);
}
.btn.btn--primary.btn--outline{
background-color:transparent;
border-color:var(--primary);
color:var(--primary);
}
.btn.btn--success.btn--outline{
background-color:transparent;
border-color:var(--success);
color:var(--success);
}
.btn.btn--neutral.btn--outline{
background-color:transparent;
border-color:var(--neutral);
color:var(--neutral);
}
.btn.btn--warning.btn--outline{
background-color:transparent;
border-color:var(--warning);
color:var(--warning);
}
.btn.btn--danger.btn--outline{
background-color:transparent;
border-color:var(--danger);
color:var(--danger);
}

.btn.btn--disabled{
opacity:0.5;
pointer-events:none;
}

`;
